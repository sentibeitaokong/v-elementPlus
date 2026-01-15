<template>
  <div>
    <div>
      <Collapse v-model="openValue" accordion>
        <CollapseItem name="a" title="2222" disabled>
            <div>aaaa</div>
        </CollapseItem>
        <CollapseItem name="b" title="333">
          <div>aaaa</div>
        </CollapseItem>
      </Collapse>
    </div>

    <div>
<!--      <Button ref="buttonRef" @click="open">Test Button</Button>-->
<!--      <Button plain @click="close">Plain Button</Button>-->
      <Button round>Round Button</Button>
      <Button circle>VK</Button>
      <Button disabled>Disabled Button</Button><br/><br/>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button><br/><br/>
      <Button type="primary" plain>Primary</Button>
      <Button type="success" plain>Success</Button>
      <Button type="info" plain>Info</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="danger" plain>Danger</Button><br/><br/>
      <Button size="large">Large</Button>
      <Button size="small">Small</Button><br/><br/>
      <Button size="large" loading>Loading</Button>
      <Button size="large" icon="address-card">Icon</Button><br/><br/>
    </div>
<!--    <Icon icon="arrow-up" :size="size" type="danger"/>-->
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'
import { ref } from 'vue'
//dropdowm默认打开
const openValue=ref<string[]>(['a'])
//icon的size属性
const size = ref<any>('3x')
</script>

<style scoped >
header {
  line-height: 1.5;
}

.logo {
  display: block;
  border: 1px solid green;
}
.vk-tooltip__popper {
  border: 1px solid red;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
