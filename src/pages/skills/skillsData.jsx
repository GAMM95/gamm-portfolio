import { ReactComponent as JavaIcon } from "../../assets/icons/javaIcon.svg";
import { ReactComponent as SpringIcon } from "../../assets/icons/springIcon.svg";
import {ReactComponent as PhpIcon } from "../../assets/icons/phpIcon.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/pythonIcon.svg";

import { ReactComponent as SQLServerIcon } from "../../assets/icons/sqlIcon.svg";
import { ReactComponent as MySQLIcon } from "../../assets/icons/mysqlIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongoIcon.svg";
import { ReactComponent as PostgreSQLIcon } from "../../assets/icons/postgresqlIcon.svg";

import { ReactComponent as AngularIcon } from "../../assets/icons/angularIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/reactIcon.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascriptIcon.svg";
import { ReactComponent as TailwindIcon } from "../../assets/icons/tailwindIcon.svg";

import {TbDeviceDesktopCode } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { PiDatabaseLight } from "react-icons/pi";

// ================== Tabs / Categorías ==================
export const skillsTabs = [
  { id: 1, title: "Backend", subtitle: "Especialidad principal", icon: VscServerProcess },
  { id: 2, title: "Bases de Datos", subtitle: "Modelado y consultas", icon: PiDatabaseLight },
  { id: 3, title: "Frontend", subtitle: "Complementario", icon: TbDeviceDesktopCode },
];

// ================== Skills por categoría ==================
export const skillsContent = {
  1: [
    { name: "Java", icon: JavaIcon },
    { name: "Spring Boot", icon: SpringIcon },
    { name: "PHP", icon: PhpIcon },
    { name: "Python", icon: PythonIcon },
  ],
  2: [
    { name: "SQL Server", icon: SQLServerIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
  ],
  3: [
    { name: "Angular", icon: AngularIcon },
    { name: "React", icon: ReactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
  ],
  // 4: [
  //   { name: "Pandas", icon: SiPandas },
  //   { name: "NumPy", icon: SiNumpy },
  //   { name: "Scikit-learn", icon: SiScikitlearn },
  // ],
  // 5: [
  //   { name: "Flutter", icon: BiLogoFlutter },
  //   { name: "Dart", icon: SiDart },
  // ],
};
