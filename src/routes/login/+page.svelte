<script>
    export let data;

    let {supabase} = data;

    async function signInWithGitHub() {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            // options: {
            //     redirectTo: 'http://localhost:5173/account'
            // }
        })
        console.log('signed in with github')
        console.log(supabase.auth.getUser())
    }
</script>


<div class="grow w-full flex justify-center items-center bg-neutral-100">
    <div class="bg-white rounded-md shadow-lg p-6">
         <h2 class="text-center">Welcome</h2>
            <button class="bg-black text-white w-full text-center py-4 px-4 mt-2 hover:shadow-lg" on:click={signInWithGitHub}>Sing In With GitHub</button>
</div>
</div>