<template>
  <div class="original">
    <h4>原事件分析</h4>
    <original></original>
  </div>
</template>

<script>
import original from '@/components/layout/general/original';
export default {
  name: "OriginalEvents",

  data() {
    return {};
  },
  components: {
   original
  },
  methods: {}
};
</script>

<style lang='less' scoped>
.original {
  background-color: #fff;
  padding:20px;
  h4 {
    font-size: 30px;
    line-height: 60px;
    color: #000080;
  }
}
</style>
