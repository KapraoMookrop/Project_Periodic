const elements = [
    { number: 1, symbol: 'H', name: 'ไฮโดรเจน', enName: 'Hydrogen', mass: '1.008', category: 'nonmetal', x: 1, y: 1, desc: 'ไฮโดรเจนเป็นธาตุที่เบาที่สุดและมีอยู่มากที่สุดในจักรวาล' },
    { number: 2, symbol: 'He', name: 'ฮีเลียม', enName: 'Helium', mass: '4.0026', category: 'noble-gas', x: 18, y: 1, desc: 'ฮีเลียมเป็นแก๊สเฉื่อยที่ไม่มีสี ไม่มีกลิ่น และเบากว่าอากาศ' },
    { number: 3, symbol: 'Li', name: 'ลิเทียม', enName: 'Lithium', mass: '6.94', category: 'alkali-metal', x: 1, y: 2, desc: 'ลิเทียมเป็นโลหะที่เบาที่สุด ใช้มากในแบตเตอรี่แบบชาร์จไฟได้' },
    { number: 4, symbol: 'Be', name: 'เบริลเลียม', enName: 'Beryllium', mass: '9.0122', category: 'alkaline-earth', x: 2, y: 2, desc: 'เบริลเลียมเป็นโลหะสีเทา มีความแข็งแกร่งและน้ำหนักเบา' },
    { number: 5, symbol: 'B', name: 'โบรอน', enName: 'Boron', mass: '10.81', category: 'metalloid', x: 13, y: 2, desc: 'โบรอนเป็นธาตุกึ่งโลหะ ใช้ในอุตสาหกรรมแก้วและสารกันเสีย' },
    { number: 6, symbol: 'C', name: 'คาร์บอน', enName: 'Carbon', mass: '12.011', category: 'nonmetal', x: 14, y: 2, desc: 'คาร์บอนเป็นพื้นฐานของสิ่งมีชีวิตทุกชนิดบนโลก' },
    { number: 7, symbol: 'N', name: 'ไนโตรเจน', enName: 'Nitrogen', mass: '14.007', category: 'nonmetal', x: 15, y: 2, desc: 'ไนโตรเจนเป็นส่วนประกอบหลักของอากาศที่ประมาณ 78%' },
    { number: 8, symbol: 'O', name: 'ออกซิเจน', enName: 'Oxygen', mass: '15.999', category: 'nonmetal', x: 16, y: 2, desc: 'ออกซิเจนเป็นธาตุที่สำคัญต่อการหายใจของสิ่งมีชีวิต' },
    { number: 9, symbol: 'F', name: 'ฟลูออรีน', enName: 'Fluorine', mass: '18.998', category: 'halogen', x: 17, y: 2, desc: 'ฟลูออรีนเป็นธาตุที่มีความไวต่อปฏิกิริยาเคมีมากที่สุด' },
    { number: 10, symbol: 'Ne', name: 'นีออน', enName: 'Neon', mass: '20.180', category: 'noble-gas', x: 18, y: 2, desc: 'นีออนเป็นแก๊สเฉื่อยที่ใช้ในป้ายไฟนีออน' },
    { number: 11, symbol: 'Na', name: 'โซเดียม', enName: 'Sodium', mass: '22.990', category: 'alkali-metal', x: 1, y: 3, desc: 'โซเดียมเป็นโลหะที่ทำปฏิกิริยากับน้ำอย่างรุนแรง พบมากในเกลือแกง' },
    { number: 12, symbol: 'Mg', name: 'แมกนีเซียม', enName: 'Magnesium', mass: '24.305', category: 'alkaline-earth', x: 2, y: 3, desc: 'แมกนีเซียมเป็นโลหะน้ำหนักเบาและมีความสำคัญต่อการเผาผลาญในร่างกาย' },
    { number: 13, symbol: 'Al', name: 'อะลูมิเนียม', enName: 'Aluminium', mass: '26.982', category: 'post-transition', x: 13, y: 3, desc: 'อะลูมิเนียมเป็นโลหะที่มีน้ำหนักเบาและไม่เป็นสนิม' },
    { number: 14, symbol: 'Si', name: 'ซิลิคอน', enName: 'Silicon', mass: '28.085', category: 'metalloid', x: 14, y: 3, desc: 'ซิลิคอนเป็นหัวใจหลักของอุตสาหกรรมไมโครชิปและอิเล็กทรอนิกส์' },
    { number: 15, symbol: 'P', name: 'ฟอสฟอรัส', enName: 'Phosphorus', mass: '30.974', category: 'nonmetal', x: 15, y: 3, desc: 'ฟอสฟอรัสมีความสำคัญต่อกระดูกและ DNA' },
    { number: 16, symbol: 'S', name: 'กำมะถัน', enName: 'Sulfur', mass: '32.06', category: 'nonmetal', x: 16, y: 3, desc: 'กำมะถันเป็นอโลหะสีเหลืองที่มีกลิ่นเป็นเอกลักษณ์' },
    { number: 17, symbol: 'Cl', name: 'คลอรีน', enName: 'Chlorine', mass: '35.45', category: 'halogen', x: 17, y: 3, desc: 'คลอรีนใช้ในการฆ่าเชื้อโรคในน้ำประปาและสระว่ายน้ำ' },
    { number: 18, symbol: 'Ar', name: 'อาร์กอน', enName: 'Argon', mass: '39.948', category: 'noble-gas', x: 18, y: 3, desc: 'อาร์กอนใช้บรรจุในหลอดไฟเพื่อป้องกันไส้หลอดไหม้' },
    { number: 19, symbol: 'K', name: 'โพแทสเซียม', enName: 'Potassium', mass: '39.098', category: 'alkali-metal', x: 1, y: 4, desc: 'โพแทสเซียมเป็นเกลือแร่ที่สำคัญต่อการทำงานของระบบประสาทและหัวใจ' },
    { number: 20, symbol: 'Ca', name: 'แคลเซียม', enName: 'Calcium', mass: '40.078', category: 'alkaline-earth', x: 2, y: 4, desc: 'แคลเซียมเป็นส่วนประกอบหลักของกระดูกและฟัน' },
    { number: 21, symbol: 'Sc', name: 'สแกนเดียม', enName: 'Scandium', mass: '44.956', category: 'transition-metal', x: 3, y: 4, desc: 'สแกนเดียมใช้ในอุตสาหกรรมการบินและอวกาศ' },
    { number: 22, symbol: 'Ti', name: 'ไทเทเนียม', enName: 'Titanium', mass: '47.867', category: 'transition-metal', x: 4, y: 4, desc: 'ไทเทเนียมมีความแข็งแกร่งเท่าเหล็กแต่เบากว่ามาก' },
    { number: 23, symbol: 'V', name: 'วานาเดียม', enName: 'Vanadium', mass: '50.942', category: 'transition-metal', x: 5, y: 4, desc: 'วานาเดียมใช้เพิ่มความแข็งแรงให้กับเหล็กกล้า' },
    { number: 24, symbol: 'Cr', name: 'โครเมียม', enName: 'Chromium', mass: '51.996', category: 'transition-metal', x: 6, y: 4, desc: 'โครเมียมทำให้เหล็กเงางามและป้องกันสนิม' },
    { number: 25, symbol: 'Mn', name: 'แมงกานีส', enName: 'Manganese', mass: '54.938', category: 'transition-metal', x: 7, y: 4, desc: 'แมงกานีสใช้ในการผลิตเหล็กกล้าและถ่านไฟฉาย' },
    { number: 26, symbol: 'Fe', name: 'เหล็ก', enName: 'Iron', mass: '55.845', category: 'transition-metal', x: 8, y: 4, desc: 'เหล็กเป็นโลหะที่ใช้มากที่สุดในโลกและอยู่ในเลือดมนุษย์' },
    { number: 27, symbol: 'Co', name: 'โคบอลต์', enName: 'Cobalt', mass: '58.933', category: 'transition-metal', x: 9, y: 4, desc: 'โคบอลต์ใช้ในแม่เหล็กและวิตามิน B12' },
    { number: 28, symbol: 'Ni', name: 'นิกเกิล', enName: 'Nickel', mass: '58.693', category: 'transition-metal', x: 10, y: 4, desc: 'นิกเกิลใช้ในการชุบโลหะและการผลิตเหรียญกษาปณ์' },
    { number: 29, symbol: 'Cu', name: 'ทองแดง', enName: 'Copper', mass: '63.546', category: 'transition-metal', x: 11, y: 4, desc: 'ทองแดงเป็นตัวนำไฟฟ้าที่ดีเยี่ยม' },
    { number: 30, symbol: 'Zn', name: 'สังกะสี', enName: 'Zinc', mass: '65.38', category: 'transition-metal', x: 12, y: 4, desc: 'สังกะสีใช้ป้องกันสนิมและเป็นแร่ธาตุที่จำเป็นต่อร่างกาย' },
    { number: 31, symbol: 'Ga', name: 'แกลเลียม', enName: 'Gallium', mass: '69.723', category: 'post-transition', x: 13, y: 4, desc: 'แกลเลียมเป็นโลหะที่ละลายได้ในฝ่ามือ' },
    { number: 32, symbol: 'Ge', name: 'เกอร์เมเนียม', enName: 'Germanium', mass: '72.630', category: 'metalloid', x: 14, y: 4, desc: 'เกอร์เมเนียมเป็นธาตุกึ่งโลหะที่สำคัญในใยแก้วนำแสง' },
    { number: 33, symbol: 'As', name: 'สารหนู', enName: 'Arsenic', mass: '74.922', category: 'metalloid', x: 15, y: 4, desc: 'สารหนูเป็นธาตุที่เป็นพิษแต่ก็มีการใช้ในอิเล็กทรอนิกส์' },
    { number: 34, symbol: 'Se', name: 'ซีลีเนียม', enName: 'Selenium', mass: '78.971', category: 'nonmetal', x: 16, y: 4, desc: 'ซีลีเนียมใช้ในเครื่องถ่ายเอกสารและเซลล์แสงอาทิตย์' },
    { number: 35, symbol: 'Br', name: 'โบรมีน', enName: 'Bromine', mass: '79.904', category: 'halogen', x: 17, y: 4, desc: 'โบรมีนเป็นอโลหะชนิดเดียวที่เป็นของเหลวที่อุณหภูมิห้อง' },
    { number: 36, symbol: 'Kr', name: 'คริปทอน', enName: 'Krypton', mass: '83.798', category: 'noble-gas', x: 18, y: 4, desc: 'คริปทอนเป็นแก๊สเฉื่อยที่ใช้ในหลอดไฟแฟลชถ่ายรูป' },
    { number: 37, symbol: 'Rb', name: 'รูบิเดียม', enName: 'Rubidium', mass: '85.468', category: 'alkali-metal', x: 1, y: 5, desc: 'รูบิเดียมเป็นโลหะที่ทำปฏิกิริยารุนแรงมาก' },
    { number: 38, symbol: 'Sr', name: 'สตรอนเชียม', enName: 'Strontium', mass: '87.62', category: 'alkaline-earth', x: 2, y: 5, desc: 'สตรอนเชียมใช้ทำพลุไฟสีแดง' },
    { number: 39, symbol: 'Y', name: 'อิตเทรียม', enName: 'Yttrium', mass: '88.906', category: 'transition-metal', x: 3, y: 5, desc: 'อิตเทรียมใช้ในจอภาพและเลเซอร์' },
    { number: 40, symbol: 'Zr', name: 'เซอร์โคเนียม', enName: 'Zirconium', mass: '91.224', category: 'transition-metal', x: 4, y: 5, desc: 'เซอร์โคเนียมใช้ในเครื่องปฏิกรณ์นิวเคลียร์' },
    { number: 41, symbol: 'Nb', name: 'ไนโอเบียม', enName: 'Niobium', mass: '92.906', category: 'transition-metal', x: 5, y: 5, desc: 'ไนโอเบียมใช้ในซูเปอร์คอนดักเตอร์' },
    { number: 42, symbol: 'Mo', name: 'โมลิบดีนัม', enName: 'Molybdenum', mass: '95.95', category: 'transition-metal', x: 6, y: 5, desc: 'โมลิบดีนัมใช้ในเหล็กกล้าทนความร้อนสูง' },
    { number: 43, symbol: 'Tc', name: 'เทกนีเซียม', enName: 'Technetium', mass: '98', category: 'transition-metal', x: 7, y: 5, desc: 'เทกนีเซียมเป็นธาตุกัมมันตรังสีที่สร้างขึ้นตัวแรก' },
    { number: 44, symbol: 'Ru', name: 'รูทีเนียม', enName: 'Ruthenium', mass: '101.07', category: 'transition-metal', x: 8, y: 5, desc: 'รูทีเนียมใช้ในหน้าสัมผัสไฟฟ้า' },
    { number: 45, symbol: 'Rh', name: 'โรเดียม', enName: 'Rhodium', mass: '102.91', category: 'transition-metal', x: 9, y: 5, desc: 'โรเดียมเป็นหนึ่งในโลหะมีค่าที่หายากที่สุด' },
    { number: 46, symbol: 'Pd', name: 'พัลลาเดียม', enName: 'Palladium', mass: '106.42', category: 'transition-metal', x: 10, y: 5, desc: 'พัลลาเดียมใช้ในเครื่องกรองไอเสียรถยนต์' },
    { number: 47, symbol: 'Ag', name: 'เงิน', enName: 'Silver', mass: '107.87', category: 'transition-metal', x: 11, y: 5, desc: 'เงินเป็นธาตุที่นำไฟฟ้าและความร้อนได้ดีที่สุด' },
    { number: 48, symbol: 'Cd', name: 'แคดเมียม', enName: 'Cadmium', mass: '112.41', category: 'transition-metal', x: 12, y: 5, desc: 'แคดเมียมใช้ในแบตเตอรี่ชนิดชาร์จได้' },
    { number: 49, symbol: 'In', name: 'อินเดียม', enName: 'Indium', mass: '114.82', category: 'post-transition', x: 13, y: 5, desc: 'อินเดียมใช้ในหน้าจอ LCD' },
    { number: 50, symbol: 'Sn', name: 'ดีบุก', enName: 'Tin', mass: '118.71', category: 'post-transition', x: 14, y: 5, desc: 'ดีบุกใช้เคลือบโลหะเพื่อป้องกันสนิม' },
    { number: 51, symbol: 'Sb', name: 'พลวง', enName: 'Antimony', mass: '121.76', category: 'metalloid', x: 15, y: 5, desc: 'พลวงใช้ในยุทโธปกรณ์และแบตเตอรี่' },
    { number: 52, symbol: 'Te', name: 'เทลลูเรียม', enName: 'Tellurium', mass: '127.60', category: 'metalloid', x: 16, y: 5, desc: 'เทลลูเรียมใช้ในแผ่นดิสก์ที่เขียนซ้ำได้' },
    { number: 53, symbol: 'I', name: 'ไอโอดีน', enName: 'Iodine', mass: '126.90', category: 'halogen', x: 17, y: 5, desc: 'ไอโอดีนจำเป็นต่อการทำงานของต่อมไทรอยด์' },
    { number: 54, symbol: 'Xe', name: 'ซีนอน', enName: 'Xenon', mass: '131.29', category: 'noble-gas', x: 18, y: 5, desc: 'ซีนอนใช้ในหลอดไฟรถยนต์ความเข้มสูง' },
    { number: 55, symbol: 'Cs', name: 'ซีเซียม', enName: 'Cesium', mass: '132.91', category: 'alkali-metal', x: 1, y: 6, desc: 'ซีเซียมใช้ในนาฬิกาอะตอมที่มีความแม่นยำสูง' },
    { number: 56, symbol: 'Ba', name: 'แบเรียม', enName: 'Barium', mass: '137.33', category: 'alkaline-earth', x: 2, y: 6, desc: 'แบเรียมใช้ในการเอ็กซเรย์ระบบทางเดินอาหาร' },
    { number: 57, symbol: 'La', name: 'แลนทานัม', enName: 'Lanthanum', mass: '138.91', category: 'lanthanide', x: 4, y: 8, desc: 'แลนทานัมใช้ในกล้องถ่ายรูปและแบตเตอรี่ไฮบริด' },
    { number: 58, symbol: 'Ce', name: 'ซีเรียม', enName: 'Cerium', mass: '140.12', category: 'lanthanide', x: 5, y: 8, desc: 'ซีเรียมเป็นแลนทาไนด์ที่มีมากที่สุด' },
    { number: 59, symbol: 'Pr', name: 'พราซีโอดิเมียม', enName: 'Praseodymium', mass: '140.91', category: 'lanthanide', x: 6, y: 8, desc: 'พราซีโอดิเมียมใช้ในเครื่องยนต์เครื่องบิน' },
    { number: 60, symbol: 'Nd', name: 'นีโอดิเมียม', enName: 'Neodymium', mass: '144.24', category: 'lanthanide', x: 7, y: 8, desc: 'นีโอดิเมียมใช้ทำแม่เหล็กที่มีกำลังสูงมาก' },
    { number: 61, symbol: 'Pm', name: 'โพรมีเทียม', enName: 'Promethium', mass: '145', category: 'lanthanide', x: 8, y: 8, desc: 'โพรมีเทียมเป็นธาตุกัมมันตรังสีที่ใช้ในแบตเตอรี่นิวเคลียร์' },
    { number: 62, symbol: 'Sm', name: 'ซาแมเรียม', enName: 'Samarium', mass: '150.36', category: 'lanthanide', x: 9, y: 8, desc: 'ซาแมเรียมใช้ในเลเซอร์และแม่เหล็กความร้อนสูง' },
    { number: 63, symbol: 'Eu', name: 'ยูโรเพียม', enName: 'Europium', mass: '151.96', category: 'lanthanide', x: 10, y: 8, desc: 'ยูโรเพียมใช้ทำสารเรืองแสงในหน้าจอทีวี' },
    { number: 64, symbol: 'Gd', name: 'กาดิโลเนียม', enName: 'Gadolinium', mass: '157.25', category: 'lanthanide', x: 11, y: 8, desc: 'กาดิโลเนียมใช้เป็นสารคอนทราสต์ใน MRI' },
    { number: 65, symbol: 'Tb', name: 'เทอร์เบียม', enName: 'Terbium', mass: '158.93', category: 'lanthanide', x: 12, y: 8, desc: 'เทอร์เบียมใช้ในจอแอลซีดีและเซ็นเซอร์' },
    { number: 66, symbol: 'Dy', name: 'ดิสโพรเซียม', enName: 'Dysprosium', mass: '162.50', category: 'lanthanide', x: 13, y: 8, desc: 'ดิสโพรเซียมใช้ในก้านควบคุมเครื่องปฏิกรณ์นิวเคลียร์' },
    { number: 67, symbol: 'Ho', name: 'โฮลเมียม', enName: 'Holmium', mass: '164.93', category: 'lanthanide', x: 14, y: 8, desc: 'โฮลเมียมมีพลังแม่เหล็กสูงสุดในบรรดาธาตุทั้งหมด' },
    { number: 68, symbol: 'Er', name: 'เออร์เบียม', enName: 'Erbium', mass: '167.26', category: 'lanthanide', x: 15, y: 8, desc: 'เออร์เบียมใช้ในเครื่องขยายสัญญาณไฟเบอร์ออปติก' },
    { number: 69, symbol: 'Tm', name: 'ทูเลียม', enName: 'Thulium', mass: '168.93', category: 'lanthanide', x: 16, y: 8, desc: 'ทูเลียมเป็นแลนทาไนด์ที่หายากที่สุด' },
    { number: 70, symbol: 'Yb', name: 'อิตเทอร์เบียม', enName: 'Ytterbium', mass: '173.05', category: 'lanthanide', x: 17, y: 8, desc: 'อิตเทอร์เบียมใช้ในนาฬิกาอะตอมและเครื่องเอ็กซเรย์พกพา' },
    { number: 71, symbol: 'Lu', name: 'ลูทีเชียม', enName: 'Lutetium', mass: '174.97', category: 'lanthanide', x: 18, y: 8, desc: 'ลูทีเชียมใช้ในการรักษาโรคมะเอ็ง' },
    { number: 72, symbol: 'Hf', name: 'แฮฟเนียม', enName: 'Hafnium', mass: '178.49', category: 'transition-metal', x: 4, y: 6, desc: 'แฮฟเนียมใช้ในไมโครโพรเซสเซอร์รุ่นใหม่' },
    { number: 73, symbol: 'Ta', name: 'แทนทาลัม', enName: 'Tantalum', mass: '180.95', category: 'transition-metal', x: 5, y: 6, desc: 'แทนทาลัมใช้ในตัวเก็บประจุของสมาร์ทโฟน' },
    { number: 74, symbol: 'W', name: 'ทังสเตน', enName: 'Tungsten', mass: '183.84', category: 'transition-metal', x: 6, y: 6, desc: 'ทังสเตนมีจุดหลอมเหลวสูงที่สุดในบรรดาโลหะ' },
    { number: 75, symbol: 'Re', name: 'รีเนียม', enName: 'Rhenium', mass: '186.21', category: 'transition-metal', x: 7, y: 6, desc: 'รีเนียมใช้ในเครื่องยนต์ไอพ่น' },
    { number: 76, symbol: 'Os', name: 'ออสเมียม', enName: 'Osmium', mass: '190.23', category: 'transition-metal', x: 8, y: 6, desc: 'ออสเมียมเป็นธาตุที่มีความหนาแน่นมากที่สุด' },
    { number: 77, symbol: 'Ir', name: 'อิริเดียม', enName: 'Iridium', mass: '192.22', category: 'transition-metal', x: 9, y: 6, desc: 'อิริเดียมเป็นโลหะที่ทนทานต่อการกัดกร่อนมากที่สุด' },
    { number: 78, symbol: 'Pt', name: 'แพลทินัม', enName: 'Platinum', mass: '195.08', category: 'transition-metal', x: 10, y: 6, desc: 'แพลทินัมใช้ในเครื่องประดับและเป็นตัวเร่งปฏิกิริยา' },
    { number: 79, symbol: 'Au', name: 'ทองคำ', enName: 'Gold', mass: '196.97', category: 'transition-metal', x: 11, y: 6, desc: 'ทองคำเป็นโลหะที่มีค่าและไม่ทำปฏิกิริยากับธาตุอื่น' },
    { number: 80, symbol: 'Hg', name: 'ปรอท', enName: 'Mercury', mass: '200.59', category: 'transition-metal', x: 12, y: 6, desc: 'ปรอทเป็นโลหะชนิดเดียวที่เป็นของเหลวที่อุณหภูมิห้อง' },
    { number: 81, symbol: 'Tl', name: 'แทลเลียม', enName: 'Thallium', mass: '204.38', category: 'post-transition', x: 13, y: 6, desc: 'แทลเลียมใช้ในเครื่องตรวจจับอินฟราเรด' },
    { number: 82, symbol: 'Pb', name: 'ตะกั่ว', enName: 'Lead', mass: '207.2', category: 'post-transition', x: 14, y: 6, desc: 'ตะกั่วใช้ป้องกันรังสีเอ็กซ์' },
    { number: 83, symbol: 'Bi', name: 'บิสมัท', enName: 'Bismuth', mass: '208.98', category: 'post-transition', x: 15, y: 6, desc: 'บิสมัทใช้ในยาเคลือบกระเพาะอาหาร' },
    { number: 84, symbol: 'Po', name: 'พอโลเนียม', enName: 'Polonium', mass: '209', category: 'metalloid', x: 16, y: 6, desc: 'พอโลเนียมเป็นธาตุกัมมันตรังสีที่มีพิษรุนแรง' },
    { number: 85, symbol: 'At', name: 'แอสทาทีน', enName: 'Astatine', mass: '210', category: 'halogen', x: 17, y: 6, desc: 'แอสทาทีนเป็นธาตุที่หายากที่สุดในเปลือกโลก' },
    { number: 86, symbol: 'Rn', name: 'เรดอน', enName: 'Radon', mass: '222', category: 'noble-gas', x: 18, y: 6, desc: 'เรดอนเป็นแก๊สกัมมันตรังสีที่อาจสะสมในอาคาร' },
    { number: 87, symbol: 'Fr', name: 'แฟรนเซียม', enName: 'Francium', mass: '223', category: 'alkali-metal', x: 1, y: 7, desc: 'แฟรนเซียมเป็นธาตุที่มีความเสถียรต่ำมาก' },
    { number: 88, symbol: 'Ra', name: 'เรเดียม', enName: 'Radium', mass: '226', category: 'alkaline-earth', x: 2, y: 7, desc: 'เรเดียมเคยใช้ทำพรายน้ำในนาฬา' },
    { number: 89, symbol: 'Ac', name: 'แอกทิเนียม', enName: 'Actinium', mass: '227', category: 'actinide', x: 4, y: 9, desc: 'แอกทิเนียมเป็นธาตุกัมมันตรังสีที่เรืองแสงสีฟ้า' },
    { number: 90, symbol: 'Th', name: 'ทอเรียม', enName: 'Thorium', mass: '232.04', category: 'actinide', x: 5, y: 9, desc: 'ทอเรียมเป็นเชื้อเพลิงนิวเคลียร์ทางเลือกที่มีความปลอดภัย' },
    { number: 91, symbol: 'Pa', name: 'โพรแทกทิเนียม', enName: 'Protactinium', mass: '231.04', category: 'actinide', x: 6, y: 9, desc: 'โพรแทกทิเนียมเป็นธาตุหายากที่มีความเป็นพิษสูง' },
    { number: 92, symbol: 'U', name: 'ยูเรเนียม', enName: 'Uranium', mass: '238.03', category: 'actinide', x: 7, y: 9, desc: 'ยูเรเนียมใช้เป็นเชื้อเพลิงหลักในโรงไฟฟ้านิวเคลียร์' },
    { number: 93, symbol: 'Np', name: 'เนปทูเนียม', enName: 'Neptunium', mass: '237', category: 'actinide', x: 8, y: 9, desc: 'เนปทูเนียมเป็นธาตุที่พบหลังยูเรเนียม' },
    { number: 94, symbol: 'Pu', name: 'พลูโทเนียม', enName: 'Plutonium', mass: '244', category: 'actinide', x: 9, y: 9, desc: 'พลูโทเนียมใช้ในอาวุธนิวเคลียร์และยานอวกาศ' },
    { number: 95, symbol: 'Am', name: 'อเมริเซียม', enName: 'Americium', mass: '243', category: 'actinide', x: 10, y: 9, desc: 'อเมริเซียมใช้ในเครื่องตรวจจับควันไฟ' },
    { number: 96, symbol: 'Cm', name: 'คูเรียม', enName: 'Curium', mass: '247', category: 'actinide', x: 11, y: 9, desc: 'คูเรียมใช้ในเครื่องตรวจวัดรังสีในยานอวกาศ' },
    { number: 97, symbol: 'Bk', name: 'เบอร์เกลียม', enName: 'Berkelium', mass: '247', category: 'actinide', x: 12, y: 9, desc: 'เบอร์เกลียมตั้งชื่อตามเมืองเบิร์กลีย์' },
    { number: 98, symbol: 'Cf', name: 'แคลิฟอร์เนียม', enName: 'Californium', mass: '251', category: 'actinide', x: 13, y: 9, desc: 'แคลิฟอร์เนียมเป็นแหล่งกำเนิดนิวตรอนที่สำคัญ' },
    { number: 99, symbol: 'Es', name: 'ไอน์สไตเนียม', enName: 'Einsteinium', mass: '252', category: 'actinide', x: 14, y: 9, desc: 'ไอน์สไตเนียมตั้งชื่อตามอัลเบิร์ต ไอน์สไตน์' },
    { number: 100, symbol: 'Fm', name: 'เฟอร์เมียม', enName: 'Fermium', mass: '257', category: 'actinide', x: 15, y: 9, desc: 'เฟอร์เมียมพบครั้งแรกหลังการทดสอบระเบิดไฮโดรเจน' },
    { number: 101, symbol: 'Md', name: 'เมนเดลีเวียม', enName: 'Mendelevium', mass: '258', category: 'actinide', x: 16, y: 9, desc: 'เมนเดลีเวียมตั้งชื่อตามผู้คิดค้นตารางธาตุ' },
    { number: 102, symbol: 'No', name: 'โนเบเลียม', enName: 'Nobelium', mass: '259', category: 'actinide', x: 17, y: 9, desc: 'โนเบเลียมตั้งชื่อตามอัลเฟรด โนเบล' },
    { number: 103, symbol: 'Lr', name: 'ลอว์เรนเซียม', enName: 'Lawrencium', mass: '262', category: 'actinide', x: 18, y: 9, desc: 'ลอว์เรนเซียมตั้งชื่อตามผู้ประดิษฐ์เครื่องไซโคลตรอน' },
    { number: 104, symbol: 'Rf', name: 'รัทเทอร์ฟอร์เดียม', enName: 'Rutherfordium', mass: '267', category: 'transition-metal', x: 4, y: 7, desc: 'รัทเทอร์ฟอร์เดียมเป็นธาตุสังเคราะห์กัมมันตรังสี' },
    { number: 105, symbol: 'Db', name: 'ดุบนีอัม', enName: 'Dubnium', mass: '270', category: 'transition-metal', x: 5, y: 7, desc: 'ดุบนีอัมเป็นธาตุที่สังเคราะห์ขึ้นในห้องปฏิบัติการ' },
    { number: 106, symbol: 'Sg', name: 'ซีบอร์เกียม', enName: 'Seaborgium', mass: '271', category: 'transition-metal', x: 6, y: 7, desc: 'ซีบอร์เกียมตั้งชื่อตาม เกลนน์ ที. ซีบอร์ก' },
    { number: 107, symbol: 'Bh', name: 'โบห์เรียม', enName: 'Bohrium', mass: '270', category: 'transition-metal', x: 7, y: 7, desc: 'โบห์เรียมตั้งชื่อตาม นีลส์ โบร์' },
    { number: 108, symbol: 'Hs', name: 'ฮัสเซียม', enName: 'Hassium', mass: '277', category: 'transition-metal', x: 8, y: 7, desc: 'ฮัสเซียมเป็นธาตุที่มีความเสถียรต่ำมาก' },
    { number: 109, symbol: 'Mt', name: 'ไมต์เนเรียม', enName: 'Meitnerium', mass: '276', category: 'transition-metal', x: 9, y: 7, desc: 'ไมต์เนเรียมตั้งชื่อตาม ลิเซ ไมต์เนอร์' },
    { number: 110, symbol: 'Ds', name: 'ดาร์มสตัดเทียม', enName: 'Darmstadtium', mass: '281', category: 'transition-metal', x: 10, y: 7, desc: 'ดาร์มสตัดเทียมสังเคราะห์ครั้งแรกในเยอรมนี' },
    { number: 111, symbol: 'Rg', name: 'เรินต์เกเนียม', enName: 'Roentgenium', mass: '280', category: 'transition-metal', x: 11, y: 7, desc: 'เรินต์เกเนียมตั้งชื่อตามผู้ค้นพบรังสีเอ็กซ์' },
    { number: 112, symbol: 'Cn', name: 'โคเปอร์นิเซียม', enName: 'Copernicium', mass: '285', category: 'transition-metal', x: 12, y: 7, desc: 'โคเปอร์นิเซียมตั้งชื่อตาม นิโคลาอุส โคเปอร์นิคัส' },
    { number: 113, symbol: 'Nh', name: 'นิโฮเนียม', enName: 'Nihonium', mass: '284', category: 'post-transition', x: 13, y: 7, desc: 'นิโฮเนียมตั้งชื่อตามประเทศญี่ปุ่น (Nihon)' },
    { number: 114, symbol: 'Fl', name: 'ฟลีโรเวียม', enName: 'Flerovium', mass: '289', category: 'post-transition', x: 14, y: 7, desc: 'ฟลีโรเวียมสังเคราะห์ขึ้นในรัสเซีย' },
    { number: 115, symbol: 'Mc', name: 'มอสโกเวียม', enName: 'Moscovium', mass: '288', category: 'post-transition', x: 15, y: 7, desc: 'มอสโกเวียมตั้งชื่อตามภูมิภาคมอสโก' },
    { number: 116, symbol: 'Lv', name: 'ลิเวอร์มอเรียม', enName: 'Livermorium', mass: '293', category: 'post-transition', x: 16, y: 7, desc: 'ลิเวอร์มอเรียมสังเคราะห์ขึ้นในสหรัฐอเมริกา' },
    { number: 117, symbol: 'Ts', name: 'เทนเนสซีน', enName: 'Tennessine', mass: '294', category: 'halogen', x: 17, y: 7, desc: 'เทนเนสซีนตั้งชื่อตามรัฐเทนเนสซี' },
    { number: 118, symbol: 'Og', name: 'โอแกนเนสซอน', enName: 'Oganesson', mass: '294', category: 'noble-gas', x: 18, y: 7, desc: 'โอแกนเนสซอนเป็นธาตุสุดท้ายในปัจจุบันของตารางธาตุ' }
];

const tableContainer = document.getElementById('periodic-table');
const modal = document.getElementById('element-modal');
const closeBtn = document.querySelector('.close-button');

const instagramModal = document.getElementById('instagram-modal');
// const instagramBtn = document.getElementById('btn-instagram');
// const closeInstagramBtn = document.getElementById('close-instagram');

// 3D Variables
let camera, scene, renderer, controls;
let objects = [];
let targets = { sphere: [], helix: [], grid: [] };

// Theme Toggle
document.getElementById('btn-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    this.textContent = isDark ? '☀️' : '🌙';
});

// Instagram Modal
// instagramBtn.addEventListener('click', () => {
//     instagramModal.style.display = 'block';
// });

// closeInstagramBtn.onclick = () => {
//     instagramModal.style.display = 'none';
// };

function renderElements() {
    tableContainer.innerHTML = '';
    elements.forEach((el, index) => {
        const card = document.createElement('div');
        card.className = `element-card ${el.category}`;
        card.style.gridColumn = el.x;
        card.style.gridRow = el.y;
        card.style.animationDelay = `${index * 0.005}s`;
        
        card.innerHTML = `
            <span class="number">${el.number}</span>
            <span class="symbol">${el.symbol}</span>
            <span class="name">${el.name}</span>
            <span class="en-name">${el.enName}</span>
        `;
        
        card.addEventListener('click', () => showDetails(el));
        tableContainer.appendChild(card);
    });
}

function showDetails(el) {
    document.getElementById('modal-number').textContent = el.number;
    document.getElementById('modal-symbol').textContent = el.symbol;
    document.getElementById('modal-name').textContent = el.name;
    document.getElementById('modal-name-en').textContent = el.enName;
    document.getElementById('modal-mass').textContent = `เลขมวลอะตอม: ${el.mass} u`;
    document.getElementById('modal-category').textContent = getThaiCategory(el.category);
    document.getElementById('modal-category').className = `category-label ${el.category}`;
    document.getElementById('modal-description').textContent = el.desc;
    
    modal.style.display = 'block';
}

function getThaiCategory(category) {
    const categories = {
        'nonmetal': 'อโลหะ',
        'noble-gas': 'แก๊สเฉื่อย',
        'alkali-metal': 'โลหะแอลคาไล',
        'alkaline-earth': 'โลหะแอลคาไลน์เอิร์ท',
        'metalloid': 'ธาตุกึ่งโลหะ',
        'post-transition': 'โลหะหลังทรานซิชัน',
        'transition-metal': 'โลหะทรานซิชัน',
        'lanthanide': 'แลนทาไนด์',
        'actinide': 'แอกทิไนด์',
        'halogen': 'แฮโลเจน'
    };
    return categories[category] || category;
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = 'none';
    if (event.target == instagramModal) instagramModal.style.display = 'none';
};

// 3D Initialization
function init3D() {
    const container = document.getElementById('container-3d');
    
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    elements.forEach((el, i) => {
        const element = document.createElement('div');
        element.className = `element-card ${el.category}`;
        element.style.width = '140px';
        element.style.height = '180px';
        element.style.boxShadow = '0 0 12px rgba(255, 255, 255, 0.1)';
        element.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        
        element.innerHTML = `
            <span class="number" style="font-size: 20px;">${el.number}</span>
            <span class="symbol" style="font-size: 60px;">${el.symbol}</span>
            <span class="name" style="font-size: 18px; display: block; margin-top: 5px;">${el.name}</span>
            <span class="en-name" style="font-size: 14px; display: block; opacity: 0.8;">${el.enName}</span>
        `;

        element.addEventListener('click', () => showDetails(el));

        const object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add(object);
        objects.push(object);
    });

    const vector = new THREE.Vector3();

    // Sphere Target
    const radius = 900;
    for (let i = 0, l = objects.length; i < l; i++) {
        const phi = Math.acos(-1 + (2 * i) / l);
        const theta = Math.sqrt(l * Math.PI) * phi;

        const object = new THREE.Object3D();
        object.position.setFromSphericalCoords(radius, phi, theta);
        vector.copy(object.position).multiplyScalar(2);
        object.lookAt(vector);
        targets.sphere.push(object);
    }

    // Helix Target
    for (let i = 0, l = objects.length; i < l; i++) {
        const theta = i * 0.175 + Math.PI;
        const y = -(i * 8) + 450;

        const object = new THREE.Object3D();
        object.position.setFromCylindricalCoords(900, theta, y);
        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt(vector);
        targets.helix.push(object);
    }

    // Grid Target
    for (let i = 0, l = objects.length; i < l; i++) {
        const object = new THREE.Object3D();
        object.position.x = ((i % 5) * 400) - 800;
        object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        object.position.z = (Math.floor(i / 25)) * 400 - 800;
        targets.grid.push(object);
    }

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.rotateSpeed = 2.0;
    controls.noPan = true; // Disable moving the group (pan)
    controls.noRotate = false;
    controls.noZoom = false;
    controls.staticMoving = false;
    controls.dynamicDampingFactor = 0.1;
    controls.target.set(0, 0, 0); // Lock center point
    controls.addEventListener('change', render3D);

    window.addEventListener('resize', onWindowResize, false);
}

function transform(targets, duration) {
    TWEEN.removeAll();

    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render3D)
        .start();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render3D();
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    if (document.getElementById('container-3d').style.display === 'block') {
        render3D();
    }
}

function render3D() {
    renderer.render(scene, camera);
}

// Layout switching logic
const layoutSelect = document.getElementById('layout-select');

layoutSelect.addEventListener('change', function() {
    const selectedBtnId = this.value;
    document.getElementById(selectedBtnId).click();
});

function syncLayoutSelect(btnId) {
    if (layoutSelect) {
        layoutSelect.value = btnId;
    }
}

document.getElementById('btn-classic').addEventListener('click', function() {
    updateLayout('layout-classic', this);
    syncLayoutSelect('btn-classic');
});

document.getElementById('btn-dense').addEventListener('click', function() {
    updateLayout('layout-dense', this);
    syncLayoutSelect('btn-dense');
});

document.getElementById('btn-list').addEventListener('click', function() {
    updateLayout('layout-list', this);
    syncLayoutSelect('btn-list');
});

document.getElementById('btn-3d').addEventListener('click', function() {
    switchTo3D(targets.sphere, this);
    syncLayoutSelect('btn-3d');
});

document.getElementById('btn-helix').addEventListener('click', function() {
    switchTo3D(targets.helix, this);
    syncLayoutSelect('btn-helix');
});

document.getElementById('btn-grid').addEventListener('click', function() {
    switchTo3D(targets.grid, this);
    syncLayoutSelect('btn-grid');
});

function updateLayout(layoutClass, btn) {
    if (btn.classList.contains('active')) return;

    document.body.classList.add('layout-changing');
    
    setTimeout(() => {
        document.getElementById('container-3d').style.display = 'none';
        document.getElementById('container-2d').style.display = 'block';
        document.getElementById('container-2d').style.opacity = '1';
        
        tableContainer.className = layoutClass;
        
        const cards = tableContainer.querySelectorAll('.element-card');
        cards.forEach((card, index) => {
            card.style.animation = 'none';
            card.offsetHeight; // trigger reflow
            card.style.animation = null;
            card.style.animationDelay = `${index * 0.005}s`;

            if (layoutClass !== 'layout-classic') {
                card.style.gridColumn = '';
                card.style.gridRow = '';
            } else {
                const symbol = card.querySelector('.symbol').textContent;
                const element = elements.find(e => e.symbol === symbol);
                card.style.gridColumn = element.x;
                card.style.gridRow = element.y;
            }
        });

        document.querySelectorAll('.controls button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.body.classList.remove('layout-changing');
    }, 500);
}

function switchTo3D(targetLayout, btn) {
    const isAlready3D = document.getElementById('container-3d').style.display === 'block';

    if (!isAlready3D) {
        document.body.classList.add('layout-changing');
        
        setTimeout(() => {
            document.getElementById('container-2d').style.display = 'none';
            document.getElementById('container-3d').style.display = 'block';
            
            if (!renderer) {
                init3D();
                animate();
            } else {
                objects.forEach(obj => {
                    obj.position.x = Math.random() * 4000 - 2000;
                    obj.position.y = Math.random() * 4000 - 2000;
                    obj.position.z = Math.random() * 4000 - 2000;
                });
            }
            
            transform(targetLayout, 1500);

            document.querySelectorAll('.controls button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.body.classList.remove('layout-changing');
        }, 500);
    } else {
        transform(targetLayout, 1500);
        document.querySelectorAll('.controls button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
}

renderElements();
