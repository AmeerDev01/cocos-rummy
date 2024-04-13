package com.cocos.game.bridge;

import java.util.List;

public class EventData {
    private String type;
    private String name;
    private Object value;
    /**
     * 事件参数
     */
    private List<EventData> eventParams;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public List<EventData> getEventParams() {
        return eventParams;
    }

    public void setEventParams(List<EventData> eventParams) {
        this.eventParams = eventParams;
    }
}
