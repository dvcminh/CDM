package com.minhvu.reportservice.repository;

import com.minhvu.reportservice.model.Report;
import com.minhvu.reportservice.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, String> {
    List<Report> findByType(Enum<Type> type);
}
