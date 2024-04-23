<template>
  <div v-if="fieldType === 'input'" class="copy-to-field-wrapper">
    <VInput
      :field="field"
      :collection="collection"
      :primary-key="primaryKey"
      :model-value="inputValue"
      @update:model-value="handleChange($event)"
    />

    <div class="icons-wrapper" @click="copyToField">
      <VIcon name="content_copy" />
      <VIcon name="arrow_downward" />
    </div>
  </div>

  <div v-else-if="fieldType === 'textarea'" class="copy-to-field-wrapper">
    <VTextarea
      :field="field"
      :collection="collection"
      :primary-key="primaryKey"
      :model-value="inputValue"
      @update:model-value="handleChange($event)"
    />

    <div class="icons-wrapper" @click="copyToField">
      <VIcon name="content_copy" />
      <VIcon name="arrow_downward" />
    </div>
  </div>

  <div v-else>
    <p>Field type not supported</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
    },
    destination_field: {
      type: String,
      default: "null",
    },
    fieldType: {
      type: String,
      default: "input",
    },
    collection: {
      type: String,
      default: null,
    },
    field: {
      type: String,
      default: null,
    },
    primaryKey: {
      type: String,
      default: null,
    },
  },
  emits: ["input", "setFieldValue"],
  setup(props, { emit }) {
    const inputValue = ref(props.value);

    watch(
      () => props.value,
      async (newVal: any, oldVal: any) => {
        if (newVal !== oldVal) {
          setTimeout(() => {
            inputValue.value = newVal;
            emit("input", newVal);
          }, 1);
        }
      }
    );

    function handleChange(value: string): void {
      inputValue.value = value;
      emit("input", value);
    }

    function copyToField() {
      emit("setFieldValue", { field: props.destination_field, value: inputValue });
    }

    console.log(props);

    return {
      fieldType: props.fieldType,
      collection: props.collection,
      primaryKey: props.primaryKey,
      field: props.field,

      inputValue,
      handleChange,
      copyToField,
    };
  },
});
</script>

<style scoped lang="css">
.copy-to-field-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.icons-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
</style>
