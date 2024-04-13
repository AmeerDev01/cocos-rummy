package com.cocos.game.bridge;

import com.cocos.game.tool.JSONTool;

public class BridgeData {
    private boolean success;
    private String msg;
    private Object data;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String toJson() {
        return JSONTool.toJson(this);
    }

    public static BridgeData ok(Object data) {
        BridgeData bridgeData = new BridgeData();
        bridgeData.setSuccess(true);
        bridgeData.setMsg("");
        bridgeData.setData(data);
        return bridgeData;
    }

}
