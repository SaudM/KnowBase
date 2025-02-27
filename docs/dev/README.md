# FastGpt 本地开发

第一次开发，请先[部署教程](../deploy/docker.md)，需要部署数据库.

client: FastGpt 网页项目
admin: 管理端

## 环境变量配置 (可能更新不及时，以 docker-compose 里的变量为准)

复制.env.template 文件，生成一个.env.local 环境变量文件夹，修改.env.local 里内容。

```bash
# proxy（可选）,海外服务器不需要配置
AXIOS_PROXY_HOST=127.0.0.1
AXIOS_PROXY_PORT=7890
# email
MY_MAIL=xxx@qq.com
MAILE_CODE=xxx

# ali ems
aliAccessKeyId=xxx
aliAccessKeySecret=xxx
aliSignName=xxx
aliTemplateCode=SMS_xxx

# token
TOKEN_KEY=xxx
# root key, 最高权限
ROOT_KEY=xxx

# 是否进行安全校验(1: 开启，0: 关闭)
SENSITIVE_CHECK=1
# openai
# OPENAI_BASE_URL=https://api.openai.com/v1
# OPENAI_BASE_URL_AUTH=可选的安全凭证(不需要的时候，记得去掉)
OPENAIKEY=sk-xxx # 对话用的key
OPENAI_TRAINING_KEY=sk-xxx # 训练用的key
GPT4KEY=sk-xxx

# claude
CLAUDE_BASE_URL=calude模型请求地址
CLAUDE_KEY=CLAUDE_KEY

# db
MONGODB_URI=mongodb://username:password@0.0.0.0:27017/test?authSource=admin
PG_HOST=0.0.0.0
PG_PORT=8100
PG_USER=xxx
PG_PASSWORD=xxx
PG_DB_NAME=xxx

#微信支付（可选）。
WX_NOTIFY_URL=https://xxx.xxxxx.com/service/utils/wxpay #回调地址
WX_V3_CODE=SDipvxxxxxxxxWvGtZ   #V3 密钥生成的字符串
WX_SERIAL_NO=17A036AxxxxxxxxxxxxF7C #证书编号
WX_APPID=wx9xxxxxxxxf0 #appid
WX_MCHID=16xxxxxx33 #商户好
WX_PRIVATE_KEY='-----BEGIN PRIVATE KEY-----你的密钥xxxxx----END PRIVATE KEY-----'
```

## 运行

```
pnpm dev
```

## 镜像打包

```bash
# 代理可选，不需要的去掉
docker build -t registry.cn-hangzhou.aliyuncs.com/fastgpt/fastgpt:latest . --network host  --build-arg HTTP_PROXY=http://127.0.0.1:7890 --build-arg HTTPS_PROXY=http://127.0.0.1:7890
```
