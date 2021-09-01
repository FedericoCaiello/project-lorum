<template>
  <div class="flex text-gray-500 text-2xl lg:space-x-6">
    <div class="text-2xl">
      <slot name="number-to-left" />
    </div>
    <span><g-image src="~/assets/Slash.png"></g-image></span>
    <slot name="number-to-right" />
  </div>
</template>