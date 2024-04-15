const names = [
    { name: "ABHISHEK PAUL", rollNo: 1, imgSrc: "https://i.pinimg.com/564x/7a/9c/c3/7a9cc36f478969da92e2e9fee391a5b2.jpg" },
    { name: "ADITYA KUMAR SINGH", rollNo: 2, imgSrc: "https://i.pinimg.com/736x/50/10/86/5010861721f41329deeefef7a1c048f5.jpg" },
    { name: "AKASH SHARMA", rollNo: 3, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ANJALI", rollNo: 4, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "ANSH TRIPATHI", rollNo: 5, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ARNOLD MINJ", rollNo: 6, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "ARVIND SONI", rollNo: 7, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "AYUSH RAI", rollNo: 8, imgSrc: "https://i.pinimg.com/564x/cb/5a/06/cb5a0695c231b1e532748daeae3e6601.jpg" },
    { name: "B. VAMSI", rollNo: 9, imgSrc: "https://i.pinimg.com/564x/9c/12/56/9c1256b353bfa55bc219b534ad997cca.jpg" },
    { name: "CHITESH KUMAR SAHU", rollNo: 11, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "HARSHVARDHAN KUMAR", rollNo: 12, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "HEENA KUMARI SAHU", rollNo: 13, imgSrc: "https://i.pinimg.com/564x/c1/d6/5e/c1d65eb71bfb042058570252b8fa522e.jpg" },
    { name: "HITESH KHUNTE", rollNo: 14, imgSrc: "https://i.pinimg.com/originals/6f/c0/62/6fc0624b47221a789a37c52d8ae36168.gif" },
    { name: "HRISHABH YADAV", rollNo: 15, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "KRISHNA PANDEY", rollNo: 16, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "KUMAR SHUBHRANSHU", rollNo: 17, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "KUMARI AASHI", rollNo: 18, imgSrc: "https://i.pinimg.com/564x/c1/86/c8/c186c89ed17db6677ae7d2c1f9592b25.jpg" },
    { name: "KUNAL PRASAD", rollNo: 19, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "LOKESH KUMAR GHRITLAHARE", rollNo: 20, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "MADHU DUBEY", rollNo: 21, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "MAHIMA NETAM", rollNo: 22, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "MAYANK SAIYAM", rollNo: 23, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "MUSKAN GUPTA", rollNo: 24, imgSrc: "https://i.pinimg.com/736x/ac/39/9d/ac399d6ed8c34f986aad55ee6cf03da1.jpg" },
    { name: "OMKAR NAYAK", rollNo: 25, imgSrc: "https://i.pinimg.com/564x/ae/a7/4a/aea74ae7d94e226d36cc890d5ac9a34b.jpg" },
    { name: "OMKAR PRASAD DHRUW", rollNo: 26, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "PARASMANI KHUNTE", rollNo: 27, imgSrc: "https://i.pinimg.com/564x/84/a5/f5/84a5f56879a12019e4963241263e505d.jpg" },
    { name: "PRABHANSHU KERKETTA", rollNo: 28, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "PRATIK MUKHERJEE", rollNo: 29, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RAHUL NISHAD", rollNo: 30, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RAJA YADAV", rollNo: 31, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RISHABH JOGI", rollNo: 32, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RISHABH VAISHNAV", rollNo: 33, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "RIYA SINGH", rollNo: 34, imgSrc: "https://i.pinimg.com/564x/3b/19/fc/3b19fc0712d259dfafcfc2c140b8d04b.jpg" },
    { name: "SAGAR SINGH", rollNo: 35, imgSrc: "https://i.pinimg.com/originals/7c/12/fa/7c12fae69e5388431ea18af2a07df3b5.gif" },
    { name: "SAKSHAM SHRIVASTAVA", rollNo: 36, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SARTHAK BHAGAT", rollNo: 37, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SATYANSH KAHARA", rollNo: 38, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SAURABH KUMAR YADAV", rollNo: 39, imgSrc: "https://i.pinimg.com/564x/fb/cc/43/fbcc43003276a217c2c80b241342f53c.jpg" },
    { name: "SAURABH MAURYA", rollNo: 40, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SHREYA SINGH", rollNo: 41, imgSrc: "https://imgs.search.brave.com/GrvFTEK-P2lH1DL2WE6ubJgILzv4FV-Kypi9jEZQ9ZU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY3V0ZS13b21h/bi1hdmF0YXItcHJv/ZmlsZS12ZWN0b3It/aWxsdXN0cmF0aW9u/XzEwNTg1MzItMTQ1/OTIuanBnP3NpemU9/NjI2JmV4dD1qcGc" },
    { name: "SHUBHAM CHANDRAKAR A", rollNo: 42, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SHUBHAM SINGH", rollNo: 43, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SONAL DHRUW", rollNo: 44, imgSrc: "https://i.pinimg.com/564x/85/37/dc/8537dcff1f79d75edae70084bcad4c26.jpg" },
    { name: "SRISHTY JHA", rollNo: 45, imgSrc: "https://i.pinimg.com/736x/90/d0/52/90d052214e946148b789a241f92f7c85.jpg" },
    { name: "SUJAL ADITYA MINJ", rollNo: 46, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "SUSHIL PATEL", rollNo: 47, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "TEJ PRATAP SHARMA", rollNo: 48, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "TRIPURARI NATH", rollNo: 49, imgSrc: "https://imgs.search.brave.com/t_EO3diQ0lNqEI0BznGqzktsXdr8cd-_ABxoymHugIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlci1waWN0/dXJlcy8xMDAvbWFs/ZTMtNTEyLnBuZw" },
    { name: "VAIBHAV KHARE", rollNo: 50, imgSrc: "https://i.pinimg.com/564x/4d/2b/e1/4d2be140612cf109167172f82bb3597c.jpg" },
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
  
