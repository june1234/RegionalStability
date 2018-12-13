<template>
  <div>
    <div>
      <h5>政治事件</h5>
      <political
        :politicalData="PoliticalData"
        :PEmotion="pEmotion"
        @PpageNum="PpageNum"
        @Pid="Pid"
      ></political>
    </div>
    <div>
      <h5>经济事件</h5>
      <economic
        :economicData="EconomicData"
        :EEmotion="eEmotion"
        @EpageNum="EpageNum"
        @Eid="Eid"
      ></economic>
    </div>
    <div>
      <h5>反恐事件</h5>
      <ctu
        :ctdData="CtuData"
        :CEmotion="cEmotion"
        @CpageNum="CpageNum"
        @Cid="Cid"
      ></ctu>
    </div>
  </div>
</template>

<script>
import political from "@/components/layout/general/original/PoliticalTable.vue";
import economic from "@/components/layout/general/original/EconomicTable.vue";
import ctu from "@/components/layout/general/original/CtuTable.vue";
export default {
  name: "index",
  props: {
    politicalData: Object,
    economicData: Object,
    ctuData: Object,
    PEmotion: Object,
    EEmotion: Object,
    CEmotion: Object
  },
  data() {
    return {
      PoliticalData: {},
      EconomicData: {},
      CtuData: {},
      pEmotion: {},
      eEmotion: {},
      cEmotion: {}
    };
  },
  watch: {
    politicalData: function(newData, oldData) {
      if (newData) {
        this.PoliticalData = newData;
      }
    },
    economicData: function(newData, oldData) {
      if (newData) {
        this.EconomicData = newData;
      }
    },
    ctuData: function(newData, oldData) {
      if (newData) {
        this.CtuData = newData;
      }
    },
    PEmotion: function(newData, oldData) {
      if (newData) {
        this.pEmotion = newData;
      }
    },
    EEmotion: function(newData, oldData) {
      if (newData) {
        this.eEmotion = newData;
      }
    },
    CEmotion: function(newData, oldData) {
      if (newData) {
        this.cEmotion = newData;
      }
    }
  },
  components: {
    political,
    economic,
    ctu
  },
  methods: {
    PpageNum(value) {
      this.$emit("PpageNum", value);
    },
    EpageNum(value) {
      this.$emit("EpageNum", value);
    },
    CpageNum(value) {
      this.$emit("CpageNum", value);
    },
    Pid(value) {
      this.$emit("Pid", value);
    },
    Eid(value) {
      this.$emit("Eid", value);
    },
    Cid(value) {
      this.$emit("Cid", value);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
