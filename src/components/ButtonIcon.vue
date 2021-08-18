<template>
  <div class="flex lg:block mb-4 lg:mb-0">
    <div class="flex space-x-4 lg:mb-12">
      <g-link>
        <div class="p-4 border border-grey-400">
          <g-image src="~/assets/arrow-left.png" />
        </div>
      </g-link>
      <g-link>
        <div class="p-4 border border-grey-400 bg-grey-100">
          <g-image src="~/assets/arrow-right.png" />
        </div>
      </g-link>
    </div>
    <div class="flex text-grey-400 text-2xl lg:space-x-6 mx-auto">
        <div class="text-2xl">
            <p>0</p>
            <p>1</p>
        </div>
        <span><g-image src="~/assets/Slash.png" class="text-grey"></g-image></span>
        <p>02</p>
    </div>
  </div>
</template>