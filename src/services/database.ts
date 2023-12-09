import { adminAuthClient } from '@/supabase/admin';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export const database = {
  getItems: async (
    table: string,
    select: string,
    eqColumn?: string,
    eqValue?: any,
    eqColumn1?: string,
    eqValue2?: any
  ) => {
    let query = supabase
      .from(table)
      .select(select)
      .order('created_at', { ascending: false });

    if (eqColumn && eqValue) {
      query = query.eq(eqColumn, eqValue);
    }
    if (eqColumn1 && eqValue2) {
      query = query.eq(eqColumn1, eqValue2);
    }

    const { data, error } = await query;
    if (error) {
      console.error(error);
      return null;
    }

    return data;
  },
  updateItems: async (
    table: string,
    dataUpdate: any,
    eqColumn?: any,
    eqValue?: any
  ) => {
    let query = supabase.from(table).update(dataUpdate).eq(eqColumn, eqValue);
    const { data, error } = await query;
    if (error) {
      console.error(error);
      return null;
    }

    return data;
  },

  deleteitem: async (table: string, id: string) => {
    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) {
        throw error;
      }
      await adminAuthClient.auth.admin.deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  },
};
