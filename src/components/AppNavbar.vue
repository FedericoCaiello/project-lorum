<template>
    <div>
        <div class="container mx-auto lg:flex lg:items-center lg:py-8">
            <div class="w-5/12">
                <g-image src="~/assets/logo.png" class="mx-auto"/>

            </div>
            <div class="w-7/12">
                <ul class="flex text-xs space-y-4 lg:space-y-0 lg:space-x-12">
                    <li class="border-t-2 border-b-2 border-grey-100 px-2"><g-link to="/main/">MAIN</g-link></li>
                    <li><g-link to="/gallery/">GALLERY</g-link></li>
                    <li><g-link to="/project/">PROJECT</g-link></li>
                    <li><g-link to="/certifications/">CERTIFICATIONS</g-link></li>
                    <li><g-link to="/contacts/">CONTACTS</g-link></li>
                </ul>

            </div>

        </div>
    </div>
</template>