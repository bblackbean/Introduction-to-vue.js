// 실습 #1 - 'todo-footer' 컴포넌트 전역 등록
// <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록
Vue.component('todo-footer', {
    template : '<p>This is another child global component</p>'
});

var cmp = {
    template: '<p>This is another local child component</p>'
}

var app = new Vue({
    el: '#app',
    data: {
        message : 'This is a parent component'
    },

    // 실습 #2 - 'todo-list' 컴포넌트 지역 등록
    // <p>This is another local child component</p> 를 template 으로 갖는 컴포넌트 등록
    components: {
        'todo-list': cmp
    }
});