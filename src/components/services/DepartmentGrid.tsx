import React from 'react';
import { ChevronRight, FileText, Truck, Heart, GraduationCap, Users } from 'lucide-react';
import deptRevenue from '../../assets/dept-revenue.png';
import deptTransport from '../../assets/dept-transport.png';
import deptHealth from '../../assets/dept-health.png';
import deptEducation from '../../assets/dept-education.png';
import deptPension from '../../assets/dept-pension.png';

interface DepartmentGridProps {
  onSelectDepartment: (deptId: string) => void;
}

export const DepartmentGrid: React.FC<DepartmentGridProps> = ({ onSelectDepartment }) => {
  const departments = [
    {
      id: 'dept-rev',
      title: 'Revenue & Certificates',
      subtitle: 'Income, Caste, Domicile...',
      image: deptRevenue,
      icon: <FileText size={18} style={{ color: '#16A34A' }} />,
    },
    {
      id: 'dept-trans',
      title: 'Transport',
      subtitle: 'Driving Licence, Vehicle...',
      image: deptTransport,
      icon: <Truck size={18} style={{ color: '#0066FF' }} />,
    },
    {
      id: 'dept-health',
      title: 'Health',
      subtitle: 'Health Schemes, Records...',
      image: deptHealth,
      icon: <Heart size={18} style={{ color: '#E11D48' }} />,
    },
    {
      id: 'dept-edu',
      title: 'Education',
      subtitle: 'Scholarship, Admissions...',
      image: deptEducation,
      icon: <GraduationCap size={18} style={{ color: '#7C3AED' }} />,
    },
    {
      id: 'dept-soc',
      title: 'Pension & Social Welfare',
      subtitle: 'Senior Citizen, Disability...',
      image: deptPension,
      icon: <Users size={18} style={{ color: '#D97706' }} />,
    },
  ];

  return (
    <section className="departments-section" aria-label="Departments and Services">
      <div className="portal-container">
        <div className="section-header-row">
          <h2 className="section-title">Departments & Services</h2>
          <a
            href="#all-departments"
            className="view-all-link"
            onClick={(e) => {
              e.preventDefault();
              onSelectDepartment('all');
            }}
          >
            <span>View All Departments</span>
            <ChevronRight size={15} />
          </a>
        </div>

        <div className="departments-grid">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="department-card"
              onClick={() => onSelectDepartment(dept.id)}
            >
              <div className="dept-img-wrap">
                <img src={dept.image} alt={dept.title} className="dept-img" />
                <div className="dept-floating-icon">
                  {dept.icon}
                </div>
              </div>
              <div className="dept-body">
                <h3 className="dept-name">{dept.title}</h3>
                <p className="dept-sub">{dept.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
