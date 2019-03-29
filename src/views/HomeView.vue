<template>
  <div>
    <top-section />
    <summary-section />>
  </div>
</template>

<script>
import TopSection from '../components/TopSection';
import SummarySection from '../components/SummarySection';


export default {
  name: 'home',
  components: {
    TopSection,
    SummarySection,
  },
};
</script>
