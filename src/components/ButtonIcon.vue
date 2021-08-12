<template>
  <div>
    <div class="flex space-x-4 lg:pb-12">
      <g-link>
        <div class="p-4 border border-grey-400">
          <g-image src="~/assets/arrow-left.png" />
        </div>
      </g-link>
      <g-link>
        <div class="p-4 border border-grey-400 bg-grey-500">
          <g-image src="~/assets/arrow-right.png" />
        </div>
      </g-link>
    </div>
    <div class="flex text-grey-400 text-2xl lg:space-x-6">
        <div class="text-2xl">
            <p>0</p>
            <p>1</p>
        </div>
        <span><g-image src="~/assets/Slash.png" class="text-grey"></g-image></span>
        <p>02</p>
    </div>
  </div>
</template>