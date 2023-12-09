import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const supabase = createClientComponentClient();
type user = {
  id: string;
  user_metadata?: {
    avatar_url?: string;
  };
};
type store = {
  user: null | user | undefined;
  session: null | object | boolean;
  setValideUser: () => void;
  setValideState: () => void;
};
const authStore = create<store>()(
  persist(
    (set) => ({
      user: null,
      session: false,

      setValideUser: async () => {
        const { data } = await supabase.auth.getUser();
        const { user: currentUser } = data;
        set(() => ({ user: currentUser ?? null }));
        set(() => ({ session: currentUser ? true : false }));
      },
      setValideState: () => {
        const { data } = supabase.auth.onAuthStateChange(
          async (event: string, session: any) => {
            if (event == 'PASSWORD_RECOVERY') {
              set(() => ({ session: false }));
            } else if (event === 'SIGNED_IN') {
              set(() => ({ user: session.user }));
              set(() => ({ session: true }));
            } else if (event === 'SIGNED_OUT') {
              set(() => ({ session: false }));
              set(() => ({ user: null }));
            }
          }
        );
        return () => {
          data.subscription.unsubscribe();
        };
      },
    }),
    {
      name: 'auth',
      skipHydration: true,
    }
  )
);

export default authStore;
