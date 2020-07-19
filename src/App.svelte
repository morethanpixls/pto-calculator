<script>
    let availablePTO = 30;
    let takenPTO = [];
    $: takenPTO;
    let desiredPTO = null;
    $: desiredPTO;
    
    function reducePTO() {
            takenPTO.push(desiredPTO);
            availablePTO--;
    }    
</script>

<main>

    <div class="message">
        {#if availablePTO <= 0 }
            You have no days left.
        {:else if availablePTO === 1 }
            You have {availablePTO} day left.
        {:else}
            You have {availablePTO} days left.
        {/if}
    </div>
    
    <div class="card">
        <input type="date" bind:value={desiredPTO}>
        <input type="submit" value="Add Date" on:click={reducePTO}>
    </div>

    <div>
        <ul>
            {#each takenPTO as day}
                <li>{takenPTO[day]}</li>
            {/each}
        </ul>
        
    </div>
</main>

<style>

.message {
    font-family: 'Abril Fatface';
    font-size: 3rem;
    padding: 20px;
    text-align: center;
}

.card {
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
}

</style>