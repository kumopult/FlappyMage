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
        impulse:cc.v2(),
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {

    },

    onBeginContact: function (contact, selfCollider, otherCollider) {
        switch(otherCollider.tag){
            case 1:
            this.getComponent(cc.RigidBody).applyLinearImpulse(this.impulse, this.node.position);
            return;
            case 0:
            console.log("不好，是魔界人！")
            this.node.destroy();
            return;
        }
    },
    // update (dt) {},
});
