<template>
    <nuxt></nuxt>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    stickyHeaderHandler,
    resizeHandler,
    showScrollTopHandler,
    setCookie,
    getCookie,
    scrollTop,
} from '~/utils';

export default {
    components: {},
    data: function () {
        return {
            isHide: false,
        };
    },
    watch: {
        $route: function () {
            resizeHandler();
            this.$modal.hideAll();
            this.isHide = getCookie('topNotice');
        },
    },
    created: function () {
        this.isHide = getCookie('topNotice');
    },
    mounted: function () {
        window.addEventListener('scroll', stickyHeaderHandler, {
            passive: true,
        });
        window.addEventListener('scroll', showScrollTopHandler, {
            passive: true,
        });
        window.addEventListener('resize', stickyHeaderHandler);
        window.addEventListener('resize', resizeHandler);
    },
    destroyed: function () {
        window.removeEventListener('scroll', showScrollTopHandler, {
            passive: true,
        });
        window.removeEventListener('scroll', stickyHeaderHandler, {
            passive: true,
        });
        window.removeEventListener('resize', stickyHeaderHandler);
        window.removeEventListener('resize', resizeHandler);
    },
    methods: {
        scrollToTop: function () {
            scrollTop(false, 70);
        },
        hideTopNotice: function () {
            this.isHide = true;
            setCookie('topNotice', false);
        },
        hideMobileSearch: function () {
            if (document.querySelector('.header-search')) {
                let headerSearch = document.querySelectorAll('.header-search');

                headerSearch.forEach((item) => {
                    item.classList.remove('show');
                    item.querySelector(
                        '.header-search-wrapper'
                    ).classList.remove('show');
                });
            }
        },
    },
};
</script>
