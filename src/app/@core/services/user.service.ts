import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { ReplaySubject, Observable } from 'rxjs';

export interface UserProfile {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
}

@Injectable()
export class UserService {
  private googleUser: gapi.auth2.GoogleUser;
  private user: UserProfile | null = null;
  private userSubject = new ReplaySubject<UserProfile | null>(1);

  constructor(private googleAuth: GoogleAuthService) {
    this.userSubject.next(null);

    this.googleAuth.getAuth().subscribe((auth) => {
      const user = auth.currentUser.get();
      this.applyGoogleUser(user);
    });
  }

  public signIn(): void {
    this.googleAuth.getAuth().subscribe(async (auth) => {
      const googleUser = await auth.signIn();

      this.applyGoogleUser(googleUser);
    });
  }

  public signOut(): void {
    this.googleUser.disconnect();
    this.applyGoogleUser(null);
  }

  public getUserProfile(): Observable<UserProfile> {
    return this.userSubject.asObservable();
  }

  public getAccessToken(): string {
    return this.googleUser.getAuthResponse().access_token;
  }

  private applyGoogleUser(googleUser: gapi.auth2.GoogleUser | null) {
    if (googleUser?.isSignedIn()) {
      this.googleUser = googleUser;
      this.user = MapProfile(googleUser.getBasicProfile());
    } else {
      this.googleUser = null;
      this.user = null;
    }

    this.userSubject.next(this.user);
  }
}

function MapProfile(profile: gapi.auth2.BasicProfile): UserProfile {
  return {
    id: profile.getId(),
    name: profile.getName(),
    firstName: profile.getGivenName(),
    lastName: profile.getFamilyName(),
    email: profile.getEmail(),
    imageUrl: profile.getImageUrl(),
  };
}
