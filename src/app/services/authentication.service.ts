import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum UserType {
  Owner,
  Clerk
}

export interface AuthResponse {
  success?: boolean;
  error?: Error;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // TODO: Mocked. Must be set during login
  public userType: UserType = UserType.Clerk;

  // TODO: Mock. Should be removed later
  private isAuthenticated = false;

  constructor() { }

  /**
   * Verify, if current token is still valid
   * @returns: True if token is still active, otherwise false
   */
  verifyAuthToken(): Observable<boolean> {
    // TODO: Mocked. Replace with actual implementation
    return of(this.isAuthenticated);
  }

  authenticateClerk(storeId, username, password): Observable<AuthResponse> {

    // TODO: Mocked. Replace with actual implementation
    this.userType = UserType.Clerk;
    return of({success: true});
  }

  authenticateOwner(username, password): Observable<AuthResponse>  {

    // TODO: Mocked. Replace with actual implementation
    this.userType = UserType.Owner;
    return of({success: true});
  }
}
