const names = [
  { name: "Abhishek Paul", rollNo: 22015301, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "ADITYA KUMAR SINGH", rollNo: 22015302, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Akash Sharma", rollNo: 22015303, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "ANJALI", rollNo: 22015304, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "ANSH TRIPATHI", rollNo: 22015305, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Arvind Soni", rollNo: 22015307, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Ayush rai", rollNo: 22015308, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "B Vamsi", rollNo: 22015309, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Bipasha Mallick", rollNo: 22015310, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "CHITESH KUMAR SAHU", rollNo: 22015311, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "HARSHVARDHAN KUMAR", rollNo: 22015312, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "HEENA KUMARI SAHU", rollNo: 22015313, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "HITESH KHUNTE", rollNo: 22015314, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "HRISHABH YADAV", rollNo: 22015315, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Krishna Pandey", rollNo: 22015316, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "KUMAR SHUBHRANSHU", rollNo: 22015317, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Kumari Aashi", rollNo: 22015318, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "KUNAL PRASAD", rollNo: 22015319, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "LOKESH KUMAR GHRITLAHARE", rollNo: 22015320, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "MADHU DUBEY", rollNo: 22015321, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "MAHIMA NETAM", rollNo: 22015322, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "MAYANK SAIYAM", rollNo: 22015323, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Muskan Gupta", rollNo: 22015324, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "OMKAR NAYAK", rollNo: 22015325, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "OMKAR PRASAD DHRUW", rollNo: 22015326, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "PARASMANI KHUNTE", rollNo: 22015327, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Prabhanshu kerketta", rollNo: 22015328, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Pratik Mukherjee", rollNo: 22015329, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Rahul Nishad", rollNo: 22015330, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "rishabh jogi", rollNo: 22015332, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Rishabh Vaishnav", rollNo: 22015333, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "RIYA SINGH", rollNo: 22015334, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Sagar Singh", rollNo: 22015335, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SAKSHAM SHRIVASTAVA", rollNo: 22015336, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SARTHAK BHAGAT", rollNo: 22015337, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SAURABH KUMAR YADAW", rollNo: 22015339, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SAURABH MAURYA", rollNo: 22015340, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SHREYA SINGH", rollNo: 22015341, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SHUBHAM CHANDRAKAR", rollNo: 22015342, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SHUBHAM SINGH", rollNo: 22015343, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SONAL DHRUW", rollNo: 22015344, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SRISHTY JHA", rollNo: 22015345, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "SUJAL ADITYA MINJ", rollNo: 22015346, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "Sushil Patel", rollNo: 22015347, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "TEJ PRATAP SHARMA", rollNo: 22015348, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "TRIPURARI NATH", rollNo: 22015349, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "VAIBHAV KHARE", rollNo: 22015350, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
  { name: "VARUN KAIWART", rollNo: 22015351, imgSrc: "https://i.pinimg.com/564x/d9/21/60/d92160da86a546289978a4d589e434bf.jpg" },
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
  
