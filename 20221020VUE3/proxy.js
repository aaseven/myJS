let obj = {
    a: 1
};

let newTarget = new Proxy(obj, {
    // 1： target：原对象
    // 2:  P : key (设置值的时候会有一个key)
    // 3:  value: 新的值
    // 4:  receiver: 原对象的proxy格式
    set(target, p, value, receiver) {
        console.log('set', target, p, value, receiver);
    },
    get(target, p, receiver) {
        console.log('get', target, p, receiver);

    }
});

// 当我设置值的时候 都会走set
newTarget.a = 10;
newTarget.a;

