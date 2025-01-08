'use client';

import { useState } from 'react';
import { Auth } from '@aws-amplify/auth';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  state: string;
}

interface SignInData {
  email: string;
  password: string;
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (data: SignUpData) => {
    setIsLoading(true);
    setError(null);

    try {
      await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
          name: data.name,
          phone_number: data.phone,
          'custom:city': data.city,
          'custom:state': data.state,
        },
      });
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign up');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (data: SignInData) => {
    setIsLoading(true);
    setError(null);

    try {
      await Auth.signIn(data.email, data.password);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign in');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await Auth.signOut();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during sign out');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await Auth.forgotPassword(email);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string, code: string, newPassword: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signUp,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    isLoading,
    error,
  };
}
