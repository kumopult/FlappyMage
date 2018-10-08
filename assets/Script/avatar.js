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
        Gravity:-1000,
        jumpSpeed:0,
        ySpeed:0,
        jumpButton:{
            default:null,
            type:cc.Button,
        }
    },

    // setJumpAction:{

    // },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        var self = this;
        self.jumpButton.node.on(cc.Node.EventType.TOUCH_START,function(event){
            self.jump();
        });
        
    },

    // onKeyDown:function(event){
    //     switch(event.keyCode) {
    //         case cc.macro.KEY.a:
    //             this.jump();
    //             break;
    //     }
    // },

    start () {

    },

    jump:function(event){
        this.ySpeed += this.jumpSpeed;
        if(this.ySpeed > this.jumpSpeed){
            this.ySpeed = this.jumpSpeed;
        }
    },

    update (dt) {
        this.ySpeed += this.Gravity * dt;
        this.node.y += this.ySpeed * dt;
        if(this.node.y < 60){
            this.node.y = 60;
            this.ySpeed = 0;
        }
        //console.log(ySpeed);
    },
});
