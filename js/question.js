const quiz = [
    {
        options:['Sunil Chhetri','Sahal Samad','Udanta Singh','Lallianzuala Chhangthe'],
        answer:0
    },
    {
        options:['Jerri Lalrinzuala','Sahal Samad','Balwant Singh','Brandon Fernandes'],
        answer:3
    },
    {
        options:['Rahul KP','Aniket Jadhav','Ashique Kurunian','Lallianzuala Chhangthe'],
        answer:2
    },
    {
        options:['Udanta Singh','Jorge Ortiz','Jeje Lalpekhlua','Ishan Pandita'],
        answer:2
    },
    {
        options:['Muhammed Nawaz','Albino Gomez','Arshdeep Singh','Dheeraj Singh'],
        answer:3
    },
    {
        options:['Gurpreet Singh','Amrinder Singh','Subratha Paul','Arshdeep Singh'],
        answer:0
    },
    {
        options:['Anwar Ali','Amarjit Singh Kiyam','Jeakson Singh','Aniket Jadhav'],
        answer:2
    },
    {
        options:['Udanta Singh','Aniket Jadhav','Jerry Lalrinzuala','Lallianzuala Chhangthe'],
        answer:2
    },
    {
        options:['Liston Colaco','Mobashir Rahman','Boris Singh','Ishan Pandita'],
        answer:0
    },
    {
        options:['Narender Gahlot','Anwar Ali','Akash Mishra','Nishu Kumar'],
        answer:3
    },
    {
        options:['Udanta Singh','Ishan Pandita','Nongdamba Naorem','Komal Thatal'],
        answer:2
    },
    {
        options:['Ishan Pandita','Mobashir Rahman','Lallianzuala Chhangthe','Rahim Ali'],
        answer:0
    },
    {
        options:['Prashant','Anwar Ali','Hitesh Sharma','Arshdeep Singh'],
        answer:0
    },
    {
        options:['Anwar Ali','Rahul KP','Amarjit Singh Kiyam','Aniket Jadhav'],
        answer:1
    },
    {
        options:['Suresh Singh','Sahal Samad','Asish Rai','Udanta Singh'],
        answer:1
    },
    {
        options:['Jerri Lalrinzuala','Jayesh Rane','Balwant Singh','Soosairaj'],
        answer:3
    },
    {
        options:['Amey Ranawade','Aniket Jadhav','Souvik Chakrabarti','Subhasish Bose'],
        answer:3
    },
    {
        options:['Albono Gomez','Subhasish Roy','Subratha Paul','Naveen Kumar'],
        answer:2
    },
    {
        options:['Deepak Tangri','Anirudh Thapa','Boris Singh','Hitesh Sharma'],
        answer:0
    },
    {
        options:['Mohammed Yasir','Anirudh Thapa','Akash Mishra','Halicharan Narzary'],
        answer:1
    },
    {
        options:['Albino Gomes','Arshdeep Singh','Naveen Kumar','Mohammed Nawas'],
        answer:0
    },
    {
        options:['Subhasish Roy','Vishal Kaith','Amrinder Singh','Prabhsukhan Singh'],
        answer:2
    },
    {
        options:['Balwant Singh','Manvir Singh','Fraukh Chaudhary','VP Suhair'],
        answer:0
    },
    {
        options:['Rahul KP','Aniket Jadhav','Rahul Bheke','Lallianzuala Chhangthe'],
        answer:2
    },
    {
        options:['Anwar Ali','Amarjit Singh Kiyam','Daniel Lalahlimpuia','Aniket Jadhav'],
        answer:2
    },
    {
        options:['Muhammed Nawaz','Albino Gomez','Arshdeep Singh','Debjit Majumder'],
        answer:3
    },
    {
        options:['Cleiton Silva','Facundo Pereyra','Dimas Delgado','Vicente Gomez'],
        answer:2
    },
    {
        options:['Semboi Haokip','Mobashir Rahman','Boris Singh','Glan Martins'],
        answer:0
    },
    {
        options:['Stephen Eze','Deshorn Brown','Idrissa Sylla','Mourtada Fall'],
        answer:3
    },
    {
        options:['Machado','Fedrico Gallego','Danny Fox','Fran Sandaza'],
        answer:1
    },
    {
        options:['Hugo Boumous','Pilkington','Lluis Sastre','Fran Sandaza'],
        answer:0
    },
    {
        options:['Udanta Singh','Boris Singh','Jackichand Singh','Komal Thatal'],
        answer:2
    },
    {
        options:['Apuia','Komal Thatal','Jitendra Singh','Aniket Jadhav'],
        answer:2
    },
    {
        options:['Khabra','Anirudh Thapa','Boris Singh','Hitesh Sharma'],
        answer:0
    },
    {
        options:['Lenny Rodrigues','Anwar Ali','Rowllin Borges','Rohit Kumar'],
        answer:0
    },
    {
        options:['Aitor Monroy','Edu Gracia','Diego Mauricio','Marcelinho'],
        answer:3
    },
    {
        options:['James Donachie','Memo','Hernan Santana','Ivan Gonzalez'],
        answer:1
    },
    {
        options:['Jerri Lalrinzuala','Jayesh Rane','Manvir Singh','Nandhakumar Shekhar'],
        answer:3
    },
    {
        //38.png
        options:['Akash Mishra','Anwar Ali','Narender Gehlot','Nishu Kumar'],
        answer:2
    },
    {
        options:['Prabhir Das','Vinit Rai','Jessel Carneiro','Nishu Kumar'],
        answer:0
    },
    {
        options:['Dheeraj Singh','Naveen Kumar','Mohammed Nawaz','Prabhsukhsn Gill'],
        answer:2
    },
    {
        options:['Anwar Ali','Nishu Kumar','Niraj Kumar','Pawan Kumar'],
        answer:2
    },
    {
        options:['Jeje Lalpekhlua','Ogbeche','Diego Mauricio','Mourtada Fall'],
        answer:1
    },
    {
        options:['Ashutosh Mehta','Aniket Jadhav','Pritam Kotal','Ishan Pandita'],
        answer:2
    },
    {
        options:['Balwant Singh','CK Vineeth','Farukh Chaudhary','Raynier Fernandes'],
        answer:3
    },
    {
        options:['VP Suhair','TP Rehenesh','Mashoor Shareef','Britto'],
        answer:1
    },
    {
        options:['Aridane Santana','Ashutosh Mehta','Ahamed Jahouh','Amey Ranawade'],
        answer:0
    },
    {
        options:['Jerry Mawihmingthanga','Lallianzuala Chhangthe','Mobashir Rahman','Shubham Sarangi'],
        answer:3
    },
    {
        options:['Apuia','Boris Singh','Asish Rai','Daniel Lalhlimpuia'],
        answer:2
    },
    {
        options:['VP Suhair','TP Rehenesh','Mashoor Shareef','Britto'],
        answer:0
    },
    {
        options:['Alberto Noguera','Carl McHugh','Ivan Gonzalez','Tiri'],
        answer:3
    },
    {
        options:['Rafael Crivellaro','Nerijus Valskis','Peter Haertley','Cole Alexander'],
        answer:1
    },
    {
        options:['Vikram Pratap','Ashutosh Mehta','Rohit Kumar','Amey Ranawade'],
        answer:0
    },
    {
        options:['Mohammed Yasir','Lallianzuala Chhangthe','Shubham Sarangi','Vinit Rai'],
        answer:3
    },
    {
        options:['Bilal Khan','Prabhsukhan Gill','Vishal Kaith','Pawan Kumar'],
        answer:2
    },
    {
        options:['David Williams','Peter Hartley','Javi Hernandes','Jordan Murray'],
        answer:0
    },
    //update
    {
        options:['Aridane Santana','Ivan Gonzalez','Hernan Santana','Cole Alexander'],
        answer:3
    },
    {
        options:['Ivan Gonzalez','Igor Angulo','Deshorn Brown','Hernan Santana'],
        answer:1
    },
    {
        options:['Aniket Jadhav','Akash Mishra','Suresh Singh','Rahim Ali'],
        answer:0
    },
    {
        options:['Germanpreet Singh','Denechandra Meitei','Ashutosh Mehta','Romario Jesuraj'],
        answer:2
    },
    {
        options:['CK Vineeth','Glan Martins','Narayan Das','Britto PM'],
        answer:0
    },
    {
        options:['Costa Nhamoinesu','Khassa Camara','Carl McHugh','Peter Hartley'],
        answer:1
    },
    {
        options:['Rafael Crivellaro','Nerijus Valskis','Bakary Kone','Costa Nhamoinesu'],
        answer:3
    },
    {
        options:['Juanan','Facundo Pereyra','Pilkington','Gary Hooper'],
        answer:0
    },
    {
        options:['Sipovic','Vicente Gomez','Steven Taylor','James Donachi'],
        answer:3
    },
    {
        options:['Dhanpal Ganesh','Germanpreet Singh','Srinivas Pandiyan','Edwin Sydney'],
        answer:3
    },
    {
        options:['Stephen Eze','Isma','Diego Mauricio','Deshorn Brown'],
        answer:0
    },
    {
        options:['Facundo Pereyra','Brnjamin Lambot','Dylan Fox','Sergio Cido'],
        answer:0
    },
    {
        options:['Sumit Rathi','Prabhir Das','Manvir Singh','Farukh Chaudhary'],
        answer:3
    },
    {
        options:['Aitor Monroy','Jorge Ortiz','Onwu','Igor Angulo'],
        answer:2
    },
    {
        options:['Aitor Monroy','David Grande','Hernan Santana','Adam Le Fondre'],
        answer:3
    },
    {
        options:['Givson Singh','Ayush Adhikari','Puitea','Shubho Gosh'],
        answer:0
    },
    {
        options:['Chinglensana Singh','Adil Khan','Halicharan Narzary','Nikhil Poojary'],
        answer:2
    },
    {
        options:['Odei Onaindia','Joao Victor','Hernan Santana','Ahmed Jahouh'],
        answer:2
    },
    {
        options:['Amadi Holloway','Bright Enobakhare','James Maghoma','Danny Fox'],
        answer:0
    },
    {
        options:['Gary Hooper','Juanan','Javi Hernandez','Cole Alexander'],
        answer:0
    },
    {
        options:['Jacob Tratt','Peter Hartley','Ahmed Jahouh','Odei Onaindia'],
        answer:2
    },
    {
        options:['Isma','Stephen Eze','Musavu King','Deshorn Brown'],
        answer:0
    },
    {
        options:['Sandesh Jhingan','Sandeep Singh','Raju Gaikwad','Adil Khan'],
        answer:3
    },
    {
        options:['Jessel Carneiro','Leon Augustine','Thoi Singh','Mandar Rao Desai'],
        answer:0
    },
    //update
    {
        options:['Lallianzuala Chhangte','Jerry Mawihmingthanga','Jerry Lalrinzuala','Nongdamba Naorem'],
        answer:0
    },
    {
        options:['Samuel Lalmuanpia','Mandar Rao Desai','Farukh Chaudhary','Jerry Mawihmingthanga'],
        answer:3
    },
    {
        options:['Sandesh Jhingan','Adil Khan','Eric Paartalu','Alex Lima'],
        answer:0
    },
    {
        options:['Alex Lima','Joao Victor','Bakary Kone','Eric Paartalu'],
        answer:2
    },
    {
        options:['Alex Lima','Benjamin Lambot','Dylan Fox','Sergio Cido'],
        answer:0
    },
    {
        options:['Jerry Lalrinzuala','Mandar Rao Desai','Samuel Lalmuanpia','Udanta Singh'],
        answer:1
    },
    {
        options:['Fitzgerald','Danny Fox','Aitor Monroy','Jacob Tratt'],
        answer:2
    },
    {
        options:['Eric Paartalu','Alex Lima','James Maghoma','Danny Fox'],
        answer:0
    },
    {
        options:['Nikhil Poojary','Adil Khan','Glan Mrtins','Akash Mishra'],
        answer:0
    },
    {
        options:['Narender Gahlot','Jeakson Singh','Sumit Rathi','Apuia'],
        answer:2
    },
    {
        options:['Rowllin Borges','Glan Martins','Musavu King','Deshorn Brown'],
        answer:0
    },
    {
        options:['Idrissa Sylla','Deshorn Brown','Rafael Crivellaro','Roy Krishna'],
        answer:3
    },
    {
        options:['James Donachie','Ivan Gonzalez','Enes Sipovic','Jcob Tratt'],
        answer:2
    },
    {
        options:['Apuia','Boris Singh','Komal Thatal','Suresh Singh'],
        answer:3
    },
    {
        options:['Romario Jesuraj','Udanta Singh','Thoi Singh','Mandar Rao Desai'],
        answer:1
    },
    {
        options:['Akash Mishra','Glan Martins','Hendry Antonay','Harmanpreet Singh'],
        answer:0
    },
    {
        options:['Samuel Lalmuanpia','Mandar Rao Desai','Ankit Mukherjee','Apuia'],
        answer:3
    },
    {
        options:['Glan Martins','Sandesh Jhingan','Adil Khan','Raju Gaikwad'],
        answer:0
    },
    {
        options:['Leon Augustine','Imran Khan','Chinglensana Singh','Ninthoi Meetei'],
        answer:2
    },
    {
        options:['Jordan Murray','Jorge Ortiz','Sergio Cidoncha','Ivan Gonzalez'],
        answer:1
    },
    //update
    {
        options:['Abdul Hakku','Mohamed Ali','Jobby Justin','Ninthoi Meetei'],
        answer:1
    },
    {
        options:['Samuel Lalmuanpia','Mobashir Rahman','Amey Ranawade','Manvir Singh'],
        answer:2
    },
    {
        options:['Arshdeep Singh','Naveen Kumar','Kamaljit Singh','Pawan Kumar'],
        answer:0
    },
    {
        options:['Alex Lima','Deshorn Brown','Bright Enobakhare','Diego Mauricio'],
        answer:2
    },
    {
        options:['Jordan Murray','Benjamin Lambot','Cleiton Silva','Deshorn Brown'],
        answer:3
    },
    {
        options:['Jordan Murray','Benjamin Lambot','Cleiton Silva','Sergio Cidoncha'],
        answer:2
    },
    {
        options:['Mobashir Rahman','Leon Augustine','Samuel Lalmuanpia','Saviour Gama'],
        answer:3
    },
    {
        options:['Semboi Haokip','Glan Martins','Abdul Hakku','Mobashir Rahman'],
        answer:2
    },
    {
        options:['Ivan Gonzalez','Benjamin Lambot','Pilkington','Danny Fox'],
        answer:0
    },
    {
        options:['Redeem Tlang','Joby Justin','Rohit Kumar','Thoi Singh'],
        answer:1
    },
    {
        options:['Jordan Muuray','Matti Steinman','Brnjamin Lambot','Kwesi Appiah'],
        answer:2
    },
    {
        options:['Leon Augustine','Puitea','Vignesh D','Seriton Fernandes'],
        answer:0
    },
    {
        options:['Seriton Fernandes','Redeem Tlang','Thoi Singh','Manvir Singh'],
        answer:3
    },
    {
        options:['Edu Garcia','Diego Mauricio','Javi Hernandes','Jcob Tratt'],
        answer:1
    },
    {
        options:['Vignesh D','Boris Singh','Komal Thatal','Mobashir Rahman'],
        answer:3
    },
    {
        options:['Vicente Gomes','Jordan Murray','Fatkhulloev','Steven Taylor'],
        answer:1
    },
    {
        options:['Ninthoi Meetei','Vignesh D','Souvik Chakrabarti','Harmanpreet Singh'],
        answer:0
    },
    {
        options:['Steven Taylor','Sergio Cidoncha','Vicente Gomes','Edu Bedia'],
        answer:3
    },
    {
        options:['Pronay Halder','Rohit Kumar','Rahim Ali','Raju Gaikwad'],
        answer:0
    },
    {
        options:['Thoi Singh','Imran Khan','Puitea','Mohammed Rakip'],
        answer:2
    },
    {
        options:['Mohammed Rakip','Rahim Ali','Thoi Singh','Romario Jesuraj'],
        answer:1
    },
    {
        options:['Seriton Fernandes','Redeem Tlang','Thoi Singh','Mohammed Rakip'],
        answer:3
    },
    {
        options:['Redeem Tlang','Samuel Lalmuanpuia','Thoi Singh','Imran Khan'],
        answer:0
    },
    {
        options:['Cy Goddard','David Grande','Jakob Sylvestr','Cido'],
        answer:3
    },
    {
        options:['Souvik Chakrabarti','Romario Jesuraj','Vignesh D','Sandeep Singh'],
        answer:1
    },
    {
        options:['Sandeep Singh','Vignesh D','Souvik Chakrabarti','Harmanpreet Singh'],
        answer:0
    },
    {
        options:['Vignesh D','Boris Singh','Thoi Singh','Seriton Fernandes'],
        answer:3
    },
    {
        options:['Souvik Chakrabarti','Thoi Singh','Komal Thatal','Raju Gaikwad'],
        answer:0
    },
    {
        options:['Thoi Singh','Imran Khan','Komal Thatal','Boris Singh'],
        answer:0
    },
    {
        options:['Boris Singh','Komal Thatal','Vignesh D','Samuel Lalmuanpuia'],
        answer:2
    }
]
