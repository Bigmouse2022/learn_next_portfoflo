import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
const Contact = () => {
  const [result, setResult] = useState(" ");
  // 在Contact组件顶部添加CORS代理函数
// Contact.jsx 中的 proxySubmit 函数
const proxySubmit = async (formData) => {
  // 注意：不再需要手动添加access_key！由代理API处理
  const response = await fetch("/api/web3proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)) // 仅原始表单数据
  });
  return response.json();
};

  // 修改onSubmit函数
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY); // 改用环境变量

    try {
      const data = await proxySubmit(formData); // 通过代理发送
      if (data.success) {
        setResult("Submitted!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Network error");
    }
  };
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);
  //   formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll mt-20 bg-contactbg 
      bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none "
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo mt-15"
      >
        发邮箱信息
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        联系我
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo"
      >
        很高兴你能来到我的网站，如果你感兴趣，可以试试发邮件给我
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto font-Outfit"
      >
        <div className="grid grid-cols-auto gap-6 mt-0 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="输入你的名字"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="输入你的邮箱"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="输入你想对我说的话"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400
        rounded-md bg-white mb-3 dark:bg-dark-hover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between 
        gap-2 bg-black/80 text-white rounded-full mx-auto
        hover:bg-black duration-500 mt-0 dark:bg-transparent dark:border-[0.5px] 
        dark:hover:bg-dark-hover"
        >
          发送
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
