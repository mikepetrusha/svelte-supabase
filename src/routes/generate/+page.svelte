<script>
</script>

<div class="grow w-full flex items-center justify-center bg-neutral-50">
	<form
		class="bg-neutral-100 shadow-md p-8"
		method="POST"
		action="?/newCountry"
	>
		<label for="prompt" class="block font-extralight tracking-wide">Enter Your Prompt Here:</label>
		<textarea name="prompt" class="w-[500px] h-[200px] px-2 py-1" />
		<div class="w-full flex justify-center mt-4">
				<button class="bg-neutral-800 px-4 py-2 font-bold text-white hover:shadow-xl" type="submit"
					>Generate</button
				>
		</div>
	</form>
</div>