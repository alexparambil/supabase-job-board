// Reusable button that triggers Google OAuth login via Supabase

import { supabase } from '../services/supabaseClient';

export const LoginButton = () => {
  const handleLogin = async () => {
    // Initiates OAuth login flow with Google
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Sign in with Google
    </button>
  );
};
