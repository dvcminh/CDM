package com.minhvu.reportservice.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "reports")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Report {
        @Id
        @GeneratedValue(generator = "uuid2")
        @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
        private String id;
        private String userId;
        private String image;
        private String title;
        private String description;
        @Enumerated(EnumType.STRING)
        private Status status;
        @Enumerated(EnumType.STRING)
        private Type type;
        private String createdDate;
        private String updatedDate;
}
