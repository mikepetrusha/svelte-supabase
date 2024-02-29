import { supabase } from '$lib/supabaseClient';

export const actions = {
	newCountry: async (event) => {
		const { data, error } = await supabase
			.from('countries')
			.insert([{ name: 'New Country' }])
			.select();
		if (error) {
			console.error('error', error);
		}
	}
};
