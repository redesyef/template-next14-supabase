import { adminAuthClient } from '@/supabase/admin';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export const auth = {
  getUser: async () => {
    const { data }: { data: any } = await supabase.auth.getUser();
    const { user } = data;
    return user;
  },
  updateUser: async (id: string, newEmail: string) => {
    const { data: user, error } =
      await adminAuthClient.auth.admin.updateUserById(id, {
        email: newEmail,
      });
    if (error) {
      console.error(error);
      return null;
    }
    return user;
  },
  signOut: async () => {
    await supabase.auth.signOut();
  },
};
