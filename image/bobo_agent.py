import os
import requests
import time
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# === API 配置 ===
SILICONFLOW_URL = "https://api.siliconflow.cn/v1/images/generations"
SILICONFLOW_TOKEN = os.getenv("SILICONFLOW_TOKEN")  # 从环境变量获取令牌
IMAGE_MODEL = "black-forest-labs/FLUX.1-pro"
IMAGE_SIZE = "1080x1920"  # 适配手机屏幕
DOWNLOAD_DIR = "image/summary_images"  # 本地存储路径
MAX_RETRIES = 3  # 最大重试次数

# 确保本地存储目录存在
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def generate_image(prompt: str, cocktail_name: str) -> str:
    """生成单张鸡尾酒图片"""
    for attempt in range(MAX_RETRIES):
        try:
            payload = {
                "model": IMAGE_MODEL,
                "prompt": prompt,
                "negative_prompt": "",
                "image_size": IMAGE_SIZE,
                "batch_size": 1,  # 每次只生成一张
                "seed": 4999999999,
                "num_inference_steps": 20,
                "guidance_scale": 7.5
            }
            headers = {
                "Authorization": f"Bearer {SILICONFLOW_TOKEN}",
                "Content-Type": "application/json"
            }

            response = requests.post(SILICONFLOW_URL, json=payload, headers=headers)
            if response.status_code == 200:
                result = response.json()
                return result["data"][0]["url"]
            else:
                print(f"❌ API 请求失败: {response.status_code}, 第 {attempt + 1} 次重试中...")
                time.sleep(2)
        except Exception as e:
            print(f"❌ API 调用异常: {e}, 第 {attempt + 1} 次重试中...")
            time.sleep(2)

    print(f"⚠️ 最终失败: {prompt}")
    return None

def download_image(url: str, save_path: str):
    """下载图片到本地"""
    for attempt in range(MAX_RETRIES):
        try:
            response = requests.get(url, stream=True)
            if response.status_code == 200:
                with open(save_path, "wb") as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
                print(f"✅ 下载完成: {save_path}")
                return True
            else:
                print(f"❌ 下载失败: {url}，状态码: {response.status_code}，第 {attempt + 1} 次重试中...")
        except Exception as e:
            print(f"❌ 下载异常: {e}，第 {attempt + 1} 次重试中...")
        time.sleep(2)

    print(f"⚠️ 最终下载失败: {url}")
    return False

def main():
    # 获取用户输入
    cocktail_name = input("请输入鸡尾酒名称（用作文件名，例如：moscow_mule）: ")
    prompt = input("请输入图片生成提示词: ")
    
    print("\n开始生成图片...")
    image_url = generate_image(prompt, cocktail_name)
    
    if image_url:
        # 生成文件名
        filename = f"{cocktail_name}_1.jpg"
        save_path = os.path.join(DOWNLOAD_DIR, filename)
        
        print("开始下载图片...")
        if download_image(image_url, save_path):
            print(f"\n✅ 成功！图片已保存到: {save_path} 🎉")
        else:
            print("\n❌ 图片下载失败")
    else:
        print("\n❌ 图片生成失败")

if __name__ == "__main__":
    main()