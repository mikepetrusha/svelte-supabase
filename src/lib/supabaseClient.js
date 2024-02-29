import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://nbirsfecypxjyhafjvzf.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iaXJzZmVjeXB4anloYWZqdnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxOTgxMDQsImV4cCI6MjAyNDc3NDEwNH0.n2OevTlUm3QKzvVP9iWlO2FcAN3SUnYX1SgnN7fBQLg'
);
