package com.freedom.water.message.entity;

/**
 * @Author: biyue
 * @Description:
 * @Date: 2018/10/31 22:46
 */
public class Result {

    private String code;
    private String message;
    private String authCode;

    public String getAuthCode() {
        return authCode;
    }
    public void setAuthCode(String authCode) {
        this.authCode = authCode;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Result{" +
                "code='" + code + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
