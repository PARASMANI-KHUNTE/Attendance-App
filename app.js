const names = [
    { name: "ABHISHEK PAUL", rollNo: 1, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ADITYA KUMAR SINGH", rollNo: 2, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "AKASH SHARMA", rollNo: 3, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ANJALI", rollNo: 4, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "ANSH TRIPATHI", rollNo: 5, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ARNOLD MINJ", rollNo: 6, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ARVIND SONI", rollNo: 7, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "AYUSH RAI", rollNo: 8, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "B. VAMSI", rollNo: 9, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "BIPASHA MALLICK", rollNo: 10, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "CHITESH KUMAR SAHU", rollNo: 11, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "HARSHVARDHAN KUMAR", rollNo: 12, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "HEENA KUMARI SAHU", rollNo: 13, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "HITESH KHUNTE", rollNo: 14, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "HRISHABH YADAV", rollNo: 15, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "KRISHNA PANDEY", rollNo: 16, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "KUMAR SHUBHRANSHU", rollNo: 17, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "KUMARI AASHI", rollNo: 18, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "KUNAL PRASAD", rollNo: 19, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "LOKESH KUMAR GHRITLAHARE", rollNo: 20, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "MADHU DUBEY", rollNo: 21, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "MAHIMA NETAM", rollNo: 22, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "MAYANK SAIYAM", rollNo: 23, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "MUSKAN GUPTA", rollNo: 24, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "OMKAR NAYAK", rollNo: 25, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "OMKAR PRASAD DHRUW", rollNo: 26, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "PARASMANI KHUNTE", rollNo: 27, imgSrc: "https://i.pinimg.com/564x/84/a5/f5/84a5f56879a12019e4963241263e505d.jpg" },
    { name: "PRABHANSHU KERKETTA", rollNo: 28, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "PRATIK MUKHERJEE", rollNo: 29, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RAHUL NISHAD", rollNo: 30, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RAJA YADAV", rollNo: 31, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RISHABH JOGI", rollNo: 32, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RISHABH VAISHNAV", rollNo: 33, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RIYA SINGH", rollNo: 34, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "SAGAR SINGH", rollNo: 35, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SAKSHAM SHRIVASTAVA", rollNo: 36, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SARTHAK BHAGAT", rollNo: 37, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SATYANSH KAHARA", rollNo: 38, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SAURABH KUMAR YADAV", rollNo: 39, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SAURABH MAURYA", rollNo: 40, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SHREYA SINGH", rollNo: 41, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "SHUBHAM CHANDRAKAR A", rollNo: 42, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SHUBHAM SINGH", rollNo: 43, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SONAL DHRUW", rollNo: 44, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "SRISHTY JHA", rollNo: 45, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "SUJAL ADITYA MINJ", rollNo: 46, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SUSHIL PATEL", rollNo: 47, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "TEJ PRATAP SHARMA", rollNo: 48, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "TRIPURARI NATH", rollNo: 49, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "VAIBHAV KHARE", rollNo: 50, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "VARUN KAIWART", rollNo: 51, imgSrc: "https://i.pinimg.com/564x/d9/21/60/d92160da86a546289978a4d589e434bf.jpg" }
  ];
  
  
  let currentIndex = 0;
  let presentList = [];
  let absentList = [];
  
  const studentCard = document.getElementById('studentCard');
  const studentImg = document.getElementById('studentImg');
  const studentName = document.getElementById('studentName');
  const rollNo = document.getElementById('rollNo');
  const presentBtn = document.getElementById('presentBtn');
  const absentBtn = document.getElementById('absentBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  
  function renderStudent() {
    const currentStudent = names[currentIndex];
    if (currentStudent) {
      studentImg.src = currentStudent.imgSrc;
      studentName.textContent = currentStudent.name;
      rollNo.textContent = `Roll No: ${currentStudent.rollNo}`;
    }
  }
  
  function handlePresent() {
    presentList.push({ name: names[currentIndex].name, rollNo: names[currentIndex].rollNo });
    moveNext();
  }
  
  function handleAbsent() {
    absentList.push({ name: names[currentIndex].name, rollNo: names[currentIndex].rollNo });
    moveNext();
  }
  
  function moveNext() {
    currentIndex++;
    if (currentIndex >= names.length) {
      currentIndex = names.length - 1;
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
    renderStudent();
  }
  
  function movePrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 0;
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    renderStudent();
  }
  
  function handleSubmit() {
    const data = [
      ['Name', 'Roll No', 'Attendance']
    ];
    for (const student of names) {
      if (presentList.find(({ rollNo }) => rollNo === student.rollNo)) {
        data.push([student.name, student.rollNo, 'P']);
      } else if (absentList.find(({ rollNo }) => rollNo === student.rollNo)) {
        data.push([student.name, student.rollNo, 'A']);
      }
    }
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
    XLSX.writeFile(wb, 'attendance.xlsx');
  }
  
  presentBtn.addEventListener('click', handlePresent);
  absentBtn.addEventListener('click', handleAbsent);
  prevBtn.addEventListener('click', movePrev);
  nextBtn.addEventListener('click', moveNext);
  submitBtn.addEventListener('click', handleSubmit);
  
  renderStudent();
  