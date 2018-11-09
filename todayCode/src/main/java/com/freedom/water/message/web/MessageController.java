package com.freedom.water.message.web;

import com.freedom.water.util.ClassPathResource;
import com.freedom.water.util.HttpClientUtil;
import com.freedom.water.message.entity.*;
import com.freedom.water.util.MessageUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

/**
 * @Author: biyue
 * @Description:
 * @Date: 2018/10/31 22:43
 */
@Controller
public class MessageController {

    //用户名
    private static final String Uid = "hjj1150837728";
    //接口安全秘钥
    private static final String Key = "bsvfpgmku41c";
//    private static final String Key = "d41d8cd98f00b204e980";
    //手机号码，多个号码如13800000000,13800000001,13800000002
    private static String smsMob = "18961736622";

    private static Set<String> phones = new HashSet<>();
    private static int totalCount = 800;

    @ResponseBody
    @RequestMapping("/save")
    public Result save(HttpServletRequest request, Message message){
        Result result = new Result();
        if("".equals(message.getName())|| "".equals(message.getPhone())){
            result.setCode("100000");
            result.setMessage("您还未完成表单填写");
            return result;
        }
        //参数增加非空验证
        if(message.getName() == null || !ClassPathResource.isName(message.getName())){
            result.setCode("100000");
            result.setMessage("姓名最多添加四个汉字或英文字母");
            return result;
        }
        // 验证手机号码是否正确
        boolean phoneFlag = ClassPathResource.isMobileNO(message.getPhone());
        if(!phoneFlag){
            result.setCode("100000");
            result.setMessage("请输入正确的手机号码");
            return result;
        }
        if(phones.contains(message.getPhone())){
            result.setCode("100000");
            result.setMessage("同一个手机号码只能提交一次");
            return result;
        }
        //如果是第二次获取，则增加验证码判断
        HttpSession session = request.getSession();
//        String count =  (String)session.getAttribute("count");
//        if("1".equals(count)){
//            // 已经注册过一次，需要验证
//            result.setMessage("您已获取成功了，不需要重复获取");
//            result.setCode("100000");
//            return result;
//        }

        StringBuffer sb = new StringBuffer();
        sb.append("@1@=");
        sb.append(message.getName());
        sb.append(",");
        sb.append("@2@=");
        sb.append(message.getPhone());
        HttpClientUtil client = HttpClientUtil.getInstance();
        //UTF发送  @1@=周星驰,@2@=18961736622
//       client.sendMsgUtf8(Uid, Key, sb.toString(), smsMob);
//        String info = MessageUtil.sendSms(smsMob,sb.toString());
        String info = MessageUtil.sendTplSms("18759205558","JSM42659-0003",sb.toString());
        System.out.println(info);
       phones.add(message.getPhone());
        result.setCode("000000");
        result.setMessage("提交成功");
        session.setAttribute("count","1");
        totalCount++;
        return result;
    }

    @ResponseBody
    @RequestMapping("getTotalCount")
    public Result getTotalCount(){
        Result result = new Result();
        result.setCode("600000");
        result.setMessage("已经提交了"+ totalCount + "人");
        return result;
    }

//    @ResponseBody
//    @RequestMapping("/getAuthCode")
//    public Result getAuthCode(HttpServletRequest request){
//        Result result = new Result();
//        HttpSession session = request.getSession();
//        String count =  (String)session.getAttribute("count");
//        if("1".equals(count)){
//            // 已经注册过一次，需要验证
//            String authCode = authCode();
//            result.setCode("100000");
//            result.setAuthCode(authCode);
//            session.setAttribute("authCode",authCode);
//        }else {
//            result.setCode("000000");
//        }
//        return result;
//    }

    @RequestMapping("/apply")
    public String apply(){
        return "page";
    }
    
    @RequestMapping("/yasuo")
    @ResponseBody
    public String yauso() {
		return "yasuo";
    	
    }

//    @RequestMapping("/apply2")
//    public String apply2(){
//        return "/main.html";
//    }

//    private static String authCode(){
//        StringBuffer authCode = new StringBuffer();
//        Random random = new Random();
//        for(int i=0;i<4;i++){
//            authCode.append(random.nextInt(9));
//        }
//        return authCode.toString();
//    }

}
