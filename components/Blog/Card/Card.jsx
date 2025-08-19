"use client";

import Link from "next/link";
import { formatDate } from "@/functions/format-date";
import Skeleton from "@/components/Blog/Skeleton/Skeleton";

export default function Card({ blog, variant = "Dark", orientation, styles, isLoading = false }) {
  if (isLoading) {
    return (
      <div className={`${styles.Card} ${styles[variant]} ${styles[orientation]}`}>
        <div className={styles.imageWrap}>
          <Skeleton className={styles.skeletonImage} variant={variant} />
        </div>
        <div className={styles.textWrap}>
          <div>
            <Skeleton className={styles.skeletonTitle} variant={variant} />
            <Skeleton className={styles.skeletonDescription} variant={variant} />
            <Skeleton className={styles.skeletonDescriptionLine2} variant={variant} />
          </div>
          <div className={styles.author}>
            <div className={styles.profilePicture}>
              <Skeleton className={styles.skeletonAvatar} variant={variant} />
            </div>
            <div className={styles.user}>
              <Skeleton className={styles.skeletonUsername} variant={variant} />
              <Skeleton className={styles.skeletonMetadata} variant={variant} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/blog/${blog?.fields?.link}`}
      className={`${styles.Card} ${styles[variant]} ${styles[orientation]}`}
    >
      <div className={styles.imageWrap}>
        <img
          src={blog?.fields?.thumbnail?.fields?.file?.url}
          alt={blog?.fields?.thumbnail?.fields?.title}
        />
      </div>
      <div className={styles.textWrap}>
        <div>
          <h2 className={styles.heading}>{blog?.fields?.title}</h2>
          <p className={styles.description}>{blog?.fields?.excerpt}</p>
        </div>
        <div className={styles.author}>
          <div className={styles.profilePicture}>
            <img
              src={
                blog?.fields?.author?.fields?.profilePicture?.fields?.file?.url
              }
              alt={blog?.fields?.author?.fields?.profilePicture?.fields?.title}
            />
          </div>
          <div className={styles.user}>
            <h3 className={styles.username}>
              {blog?.fields?.author?.fields?.name}
            </h3>
            <div className={styles.infoWrap}>
              <span className={styles.createdAt}>
                {formatDate(blog?.fields?.createdDate)}
              </span>
              <div className={styles.lineBreaker}>
                <strong>.</strong>
              </div>
              <span className={styles.readingTime}>
                {blog?.fields?.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
