import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();
	const { data } = await supabase.from('countries').select();

	if (session) {
		throw redirect(303, '/account');
	}

	return { url: url.origin, countries: data ?? [] };
};
