<script>
    export let initialPTO;

    initialPTO = 30;
</script>

<main>
    <h1>PTO</h1>

    <div class="message">
        {#if initialPTO === 0 }
            You have no days left.
        {:else if initialPTO === 1 }
            You have {initialPTO} day left.
        {:else}
            You have {initialPTO} days left.
        {/if}
    </div>
    
    <div class="card">
        <input type="date">
        <input type="submit" value="Add Date">
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