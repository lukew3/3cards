import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import rootPath from '../utils/rootPath';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>3cards</title>
      </Head>
      <main className={styles.main}>
        <svg className={styles.logo} viewBox="0 0 74 54" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M25.2213 7.22001C24.3722 7.76858 23.7509 8.6162 23.4472 9.22363L21.9472 12.2236L21.0528 11.7764L22.5528 8.77642C22.9157 8.05052 23.6445 7.04814 24.6787 6.38004C25.7342 5.69814 27.1177 5.36362 28.697 6.04045C31.5093 7.24575 54.5578 18.2198 65.7155 23.5489L65.7321 23.5568L65.7481 23.5659C66.3302 23.8986 67.1224 24.3824 67.5759 25.2097C68.0496 26.0738 68.1009 27.2005 67.4596 28.697C66.2521 31.5144 60.7762 42.5657 57.9472 48.2237L57.0528 47.7765C59.8905 42.101 65.3479 31.0857 66.5404 28.3031C67.0991 26.9996 66.9837 26.2097 66.6991 25.6904C66.397 25.1394 65.8466 24.7748 65.2678 24.4432C54.0859 19.1027 31.0893 8.15371 28.303 6.9596C27.0823 6.43643 26.0491 6.68525 25.2213 7.22001Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M55.4016 22.5123L15.5538 19.0261C13.3531 18.8336 11.4129 20.4615 11.2204 22.6622L9.4886 42.4568C9.29606 44.6575 10.924 46.5976 13.1248 46.7902L52.9725 50.2764C55.1733 50.4689 57.1134 48.841 57.3059 46.6402L59.0377 26.8457C59.2303 24.645 57.6023 22.7049 55.4016 22.5123ZM15.641 18.0299C12.89 17.7892 10.4649 19.8242 10.2242 22.5751L8.49241 42.3696C8.25173 45.1205 10.2867 47.5457 13.0376 47.7864L52.8854 51.2726C55.6363 51.5133 58.0615 49.4783 58.3021 46.7274L60.0339 26.9329C60.2746 24.182 58.2397 21.7568 55.4887 21.5161L15.641 18.0299Z" />
          <path d="M17.4512 37.3806C16.8173 37.3252 16.2622 37.1668 15.786 36.9056C15.3129 36.6418 14.9502 36.3049 14.698 35.895C14.449 35.4825 14.3423 35.0226 14.3782 34.5153L16.229 34.6772C16.2218 34.8904 16.2748 35.0833 16.388 35.2558C16.5043 35.4256 16.6662 35.5638 16.8736 35.6704C17.081 35.7769 17.3192 35.842 17.588 35.8655C17.8682 35.89 18.1202 35.8622 18.3439 35.7819C18.5677 35.7017 18.7481 35.5792 18.8851 35.4143C19.0222 35.2495 19.1007 35.0525 19.1208 34.8232C19.1411 34.5912 19.0939 34.3803 18.9794 34.1906C18.8679 33.9984 18.6963 33.8408 18.4646 33.7178C18.2358 33.5951 17.9573 33.5194 17.629 33.4907L16.8181 33.4198L16.9363 32.0698L17.7471 32.1408C18.0244 32.165 18.2734 32.1383 18.4941 32.0607C18.7176 31.9833 18.8962 31.8649 19.03 31.7055C19.1639 31.5432 19.2409 31.3475 19.261 31.1182C19.2801 30.9003 19.2444 30.7047 19.1541 30.5314C19.0668 30.3555 18.9338 30.2127 18.7552 30.103C18.5794 29.9935 18.3684 29.928 18.1222 29.9064C17.8732 29.8846 17.6414 29.91 17.4269 29.9825C17.2126 30.0521 17.036 30.1636 16.8971 30.3168C16.7582 30.4701 16.6749 30.6567 16.6471 30.8767L14.8854 30.7226C14.9377 30.2224 15.1192 29.7934 15.43 29.4356C15.7408 29.0778 16.1405 28.8119 16.6291 28.6379C17.1208 28.4614 17.6638 28.3991 18.2581 28.4511C18.8581 28.5036 19.3735 28.6585 19.8044 28.9158C20.2354 29.173 20.5591 29.4979 20.7757 29.8905C20.9954 30.2804 21.0838 30.7045 21.0409 31.1627C21.0011 31.6498 20.8142 32.0426 20.48 32.3414C20.1488 32.6403 19.7359 32.8124 19.2414 32.8575L19.2355 32.9255C19.8679 33.0635 20.3352 33.3282 20.6375 33.7197C20.9428 34.1086 21.0705 34.5732 21.0203 35.1135C20.9798 35.609 20.7984 36.0366 20.4761 36.3962C20.1565 36.7561 19.7353 37.0244 19.2122 37.2011C18.6891 37.3777 18.1021 37.4376 17.4512 37.3806Z" />
          <path d="M25.08 38.0566C24.4121 37.9982 23.85 37.8064 23.3937 37.4813C22.9404 37.1537 22.6071 36.7253 22.3939 36.1961C22.1835 35.6673 22.1072 35.0731 22.1649 34.4137C22.2233 33.7458 22.4033 33.1712 22.7049 32.69C23.0096 32.2062 23.4135 31.8437 23.9165 31.6026C24.4198 31.3586 25.0012 31.2654 25.6606 31.3231C26.2294 31.3729 26.7185 31.5197 27.1278 31.7637C27.537 32.0077 27.8499 32.3274 28.0662 32.7227C28.2826 33.1181 28.3815 33.5688 28.3629 34.0748L26.6563 33.9255C26.6367 33.5958 26.5322 33.3229 26.343 33.1067C26.1568 32.8879 25.8981 32.7641 25.567 32.7351C25.2868 32.7106 25.0353 32.7656 24.8125 32.9001C24.5928 33.032 24.4123 33.2372 24.271 33.5157C24.1297 33.7942 24.0411 34.1387 24.0052 34.5491C23.9688 34.9651 23.9945 35.3238 24.0822 35.6252C24.1727 35.9268 24.316 36.1632 24.5121 36.3344C24.7081 36.5055 24.9463 36.6034 25.2264 36.6279C25.433 36.646 25.6221 36.6197 25.7937 36.5492C25.9681 36.4789 26.1161 36.3678 26.2378 36.2159C26.3625 36.0614 26.4519 35.871 26.5059 35.6447L28.2125 35.7941C28.1406 36.2897 27.9664 36.7165 27.6898 37.0744C27.4163 37.4297 27.058 37.695 26.6149 37.8701C26.1718 38.0452 25.6602 38.1074 25.08 38.0566Z" />
          <path d="M31.0098 38.5712C30.5938 38.5348 30.2294 38.4302 29.9165 38.2573C29.604 38.0817 29.3654 37.8427 29.2007 37.5402C29.0392 37.2352 28.9773 36.8676 29.0149 36.4375C29.0466 36.0752 29.1397 35.7768 29.2943 35.5422C29.4488 35.3076 29.6473 35.1254 29.8897 34.9954C30.132 34.8655 30.4023 34.7751 30.7005 34.7242C31.0015 34.6735 31.3147 34.6467 31.64 34.6438C32.0227 34.6374 32.3316 34.6273 32.5666 34.6137C32.8019 34.5972 32.975 34.5581 33.0859 34.4965C33.1968 34.4349 33.2583 34.3348 33.2705 34.1961L33.2727 34.1707C33.2962 33.9018 33.2295 33.6864 33.0726 33.5243C32.9185 33.3626 32.6872 33.2682 32.3787 33.2412C32.0533 33.2127 31.788 33.2622 31.5829 33.3897C31.3781 33.5144 31.2351 33.6816 31.1541 33.8912L29.4934 33.609C29.6129 33.2202 29.8099 32.8924 30.0842 32.6255C30.3587 32.3558 30.6995 32.1603 31.1065 32.0391C31.5166 31.9153 31.982 31.8761 32.5027 31.9217C32.865 31.9534 33.2079 32.0262 33.5316 32.1401C33.8582 32.2542 34.1424 32.4116 34.3843 32.6125C34.6291 32.8135 34.8142 33.0607 34.9397 33.354C35.0654 33.6445 35.1113 33.9836 35.0774 34.3713L34.6927 38.7693L32.9776 38.6193L33.0567 37.715L33.0058 37.7106C32.8832 37.9052 32.7274 38.0726 32.5383 38.213C32.3495 38.3504 32.1281 38.4523 31.8742 38.5185C31.6206 38.5818 31.3325 38.5994 31.0098 38.5712ZM31.6369 37.3684C31.903 37.3917 32.1424 37.3599 32.3554 37.273C32.5685 37.1833 32.7411 37.0529 32.8729 36.8819C33.0048 36.711 33.0808 36.5109 33.1009 36.2816L33.1614 35.5897C33.1016 35.6215 33.0208 35.6486 32.919 35.6711C32.8203 35.691 32.709 35.7083 32.5851 35.7232C32.4614 35.7352 32.3378 35.7457 32.2144 35.7549C32.0912 35.7612 31.9795 35.7672 31.8792 35.7726C31.6642 35.7852 31.4745 35.8185 31.3101 35.8726C31.1457 35.9266 31.0145 36.0078 30.9166 36.1162C30.819 36.2217 30.7627 36.3594 30.7479 36.5292C30.7263 36.7754 30.799 36.9714 30.9659 37.1172C31.1359 37.2604 31.3596 37.3441 31.6369 37.3684Z" />
          <path d="M36.0957 38.8921L36.6661 32.3715L38.4194 32.5249L38.3199 33.6626L38.3878 33.6685C38.542 33.2742 38.7683 32.986 39.0666 32.804C39.3651 32.619 39.6969 32.5426 40.0619 32.5745C40.1525 32.5824 40.2497 32.5966 40.3534 32.6171C40.4571 32.6376 40.5477 32.6612 40.6252 32.6879L40.4848 34.2926C40.4022 34.2597 40.2867 34.2268 40.1384 34.1939C39.9902 34.1609 39.8538 34.139 39.7293 34.1281C39.4632 34.1048 39.2204 34.1421 39.0008 34.2398C38.7843 34.3349 38.6063 34.479 38.4668 34.6721C38.3301 34.8655 38.2501 35.0952 38.2269 35.3612L37.9041 39.0503L36.0957 38.8921Z" />
          <path d="M43.0771 39.6098C42.5818 39.5665 42.1444 39.3999 41.7648 39.11C41.3883 38.8175 41.1044 38.412 40.913 37.8933C40.7248 37.3721 40.6625 36.7478 40.7261 36.0205C40.7915 35.2733 40.9661 34.6627 41.25 34.1884C41.5342 33.7114 41.8865 33.3672 42.3071 33.1559C42.7308 32.942 43.1817 32.856 43.66 32.8978C44.0251 32.9298 44.3239 33.0187 44.5564 33.1645C44.792 33.3077 44.9767 33.4779 45.1106 33.675C45.2476 33.8694 45.348 34.0579 45.4119 34.2403L45.4671 34.2451L45.7531 30.9764L47.5573 31.1342L46.7966 39.8283L45.0137 39.6723L45.105 38.628L45.0286 38.6213C44.9279 38.795 44.7919 38.9642 44.6206 39.1289C44.4524 39.2909 44.2402 39.4192 43.9838 39.5137C43.7303 39.6085 43.428 39.6405 43.0771 39.6098ZM43.7761 38.2208C44.0676 38.2463 44.3207 38.1886 44.5355 38.0477C44.7534 37.9042 44.9288 37.6929 45.0616 37.4136C45.1972 37.1346 45.282 36.8012 45.3159 36.4135C45.3498 36.0258 45.3255 35.6843 45.243 35.389C45.1604 35.0938 45.0241 34.8594 44.8339 34.6859C44.6438 34.5125 44.403 34.413 44.1115 34.3875C43.8143 34.3615 43.5568 34.4202 43.3389 34.5637C43.121 34.7072 42.9472 34.9173 42.8175 35.1939C42.6878 35.4706 42.6065 35.7972 42.5735 36.1736C42.5403 36.5528 42.5634 36.8927 42.6426 37.1934C42.7249 37.4915 42.8593 37.7314 43.0459 37.9131C43.2355 38.0923 43.4789 38.1948 43.7761 38.2208Z" />
          <path d="M54.1166 35.7718L52.4521 35.7289C52.4361 35.5849 52.3864 35.4522 52.303 35.3308C52.2197 35.2066 52.1046 35.1039 51.9578 35.0226C51.814 34.9387 51.6373 34.8876 51.4279 34.8693C51.1477 34.8448 50.9062 34.8835 50.7034 34.9856C50.5008 35.0848 50.3909 35.232 50.3739 35.4273C50.3602 35.5829 50.411 35.72 50.5261 35.8384C50.6412 35.9569 50.8473 36.0619 51.1445 36.1534L52.3038 36.4944C52.9264 36.6801 53.3807 36.9309 53.6667 37.2468C53.9528 37.5627 54.0753 37.9555 54.0342 38.4253C53.9968 38.8527 53.838 39.2166 53.5579 39.5172C53.2806 39.8181 52.9162 40.04 52.4645 40.183C52.0159 40.3234 51.5086 40.3688 50.9425 40.3193C50.0794 40.2438 49.4074 40.0039 48.9266 39.5997C48.4488 39.1929 48.1934 38.6743 48.1601 38.044L49.947 38.1062C49.9777 38.3741 50.0903 38.5865 50.2848 38.7432C50.4795 38.8971 50.7382 38.9882 51.0608 39.0164C51.3778 39.0442 51.6378 39.0056 51.8409 38.9007C52.0471 38.7933 52.1601 38.6421 52.18 38.447C52.1916 38.2826 52.134 38.1421 52.0073 38.0255C51.8809 37.9061 51.6786 37.8057 51.4006 37.7244L50.291 37.4006C49.6654 37.2175 49.2107 36.9553 48.9269 36.6139C48.6459 36.2728 48.5267 35.8588 48.5692 35.3721C48.6059 34.9532 48.7507 34.6023 49.0036 34.3193C49.2593 34.0365 49.6009 33.8311 50.0285 33.7031C50.4589 33.5754 50.9528 33.5359 51.5104 33.5847C52.3339 33.6567 52.9668 33.8875 53.409 34.2769C53.854 34.6666 54.0898 35.1649 54.1166 35.7718Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.3309 13.0954C17.5509 13.6989 17.1293 14.5443 16.9851 15.1213L16.9831 15.1294L15.9808 18.6374L15.0192 18.3627L16.017 14.8704C16.2079 14.1146 16.7361 13.0649 17.7191 12.3045C18.7262 11.5253 20.1714 11.0813 22.1085 11.5118C24.4391 12.0297 34.9363 14.9327 45.2221 17.7772C50.8899 19.3447 56.4935 20.8943 60.631 22.0174C61.6733 22.3003 62.9007 22.8336 63.7413 23.7382C64.6138 24.6772 65.033 25.982 64.4743 27.658C63.9424 29.2539 62.3456 34.3401 60.7468 39.4324C59.9461 41.9828 59.1449 44.5348 58.4768 46.6505L57.5232 46.3494C58.1884 44.2428 58.9872 41.6984 59.7865 39.1526C61.3878 34.0523 62.9909 28.946 63.5257 27.3418C63.967 26.0178 63.6362 25.0941 63.0087 24.4189C62.3493 23.7091 61.3267 23.2424 60.369 22.9825C56.1998 21.8508 50.5649 20.2925 44.8778 18.7197C34.6226 15.8835 24.1977 13.0005 21.8915 12.488C20.2286 12.1185 19.0905 12.5078 18.3309 13.0954Z"/>
        </svg>
        <h3 className={styles.main_desc}>Flashcards Without the Middleman</h3>
        <p className={styles.sub_desc}>No ads, no paywalls, no takedowns</p>
        <div className={styles.buttons_group}>
          <Link href={`${rootPath()}/sets`}>
            <a className={styles.button}>Browse Sets</a>
          </Link>
          <Link href={`${rootPath()}/create`}>
            <a className={styles.button}>Create a set</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
