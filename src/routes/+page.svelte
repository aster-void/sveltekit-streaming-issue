<script lang="ts">
  const { data } = $props();
</script>

<h1>Issue Repro</h1>

<div>this text should render immediately</div>
<div>this will show after 2s:{#await data.p2 then data}{data}{/await}</div>
<div>this will show after 3s:{#await data.p3 then data}{data}{/await}</div>
