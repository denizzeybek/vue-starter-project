import RInput from '@/components/ui/global/Input.vue'
import RSelect from '@/components/ui/global/Select.vue'
import RCheckbox from '@/components/ui/global/Checkbox.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RSelect: typeof RSelect
    RInput: typeof RInput
    RCheckbox: typeof RCheckbox
  }
}
