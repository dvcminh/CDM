package com.minhvu.reportservice.controller;

import com.minhvu.reportservice.dto.CreateReportRequest;
import com.minhvu.reportservice.dto.UpdateReportRequest;
import com.minhvu.reportservice.model.Report;
import com.minhvu.reportservice.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping
    public ResponseEntity<Report> createReport(@RequestBody CreateReportRequest report) {
        return ResponseEntity.ok(reportService.createReport(report));
    }

    @GetMapping
    public ResponseEntity<List<Report>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReports());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Report> getReportById(@PathVariable String id) {
        return ResponseEntity.ok(reportService.getReportById(id));
    }

    @PutMapping
    public ResponseEntity<Report> updateReport(@RequestBody UpdateReportRequest report) {
        return ResponseEntity.ok(reportService.updateReport(report));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable String id) {
        reportService.deleteReport(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Report>> findByType(@PathVariable String type) {
        return ResponseEntity.ok(reportService.findByType(type));
    }
}