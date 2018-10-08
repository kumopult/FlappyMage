// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        PREFAB: cc.Prefab, //预制件
        parent: cc.Node,   //预制件实例化后所在的父节点
        autoLoad: false,   //自动加载
        
        avatar: {
            default:null,
            type:cc.Sprite,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.schedule(function() {
            // 这里的 this 指向 component
            this.loadPrefab();
        }, 2);
    },

    loadPrefab() {
        let node = cc.instantiate(this.PREFAB);
        node.y = Math.random()*500;
        //当父节点不存在时，使用当前组件为父节点
        node.parent = this.parent || this.node;
    },

    start () {

    },

    // update (dt) {},
});
