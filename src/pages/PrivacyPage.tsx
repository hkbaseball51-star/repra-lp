import React from 'react';
import { LegalPageLayout, LegalContent, bullet, contactBlock } from '../components/LegalPageLayout';

const ja: LegalContent = {
  title: 'プライバシーポリシー',
  subtitle: 'REPRA プライバシーポリシー',
  lastUpdated: '最終更新日：2026年',
  sections: [
    {
      heading: 'はじめに',
      content: (
        <p>
          REPRAは、ユーザーがトレーニング記録、重量、回数、セット数、進捗グラフを管理し、努力の積み重ねを見返せるようにする筋トレ記録アプリです。本ポリシーでは、REPRAにおける情報の取り扱いについて説明します。
        </p>
      ),
    },
    {
      heading: '取得する情報',
      content: (
        <>
          <p>REPRAでは、以下の情報を取得する場合があります。</p>
          {bullet([
            'メールアドレス、ユーザー名などのアカウント情報',
            '種目、重量、回数、セット数、日付、メモなどのトレーニング記録',
            'Best 1RM、Total Volume、体重、継続日数などの進捗データ',
            'アプリの利用状況や端末に関する情報',
          ])}
        </>
      ),
    },
    {
      heading: '情報の利用目的',
      content: (
        <>
          <p>取得した情報は、以下の目的で利用します。</p>
          {bullet([
            'アプリの提供、維持、改善',
            'トレーニング記録の保存と表示',
            '進捗グラフや統計情報の表示',
            'ユーザーサポートへの対応',
            '不正利用の防止とセキュリティ維持',
          ])}
        </>
      ),
    },
    {
      heading: 'データ保存と外部サービス',
      content: (
        <>
          <p>REPRAでは、サービス提供のために以下の外部サービスを利用する場合があります。</p>
          {bullet([
            'Supabase：認証、データベース、ストレージ',
            'Vercel：ホスティング',
            'Stripe：将来、有料機能を導入する場合の決済',
          ])}
          <p className="mt-3">
            これらのサービスは、REPRAの提供に必要な範囲で情報を処理する場合があります。
          </p>
        </>
      ),
    },
    {
      heading: '情報の第三者提供',
      content: (
        <p>
          REPRAは、ユーザーの個人情報を販売しません。ただし、サービス提供に必要な場合、法令に基づく場合、セキュリティ保護のために必要な場合、またはユーザーの同意がある場合には、情報を共有することがあります。
        </p>
      ),
    },
    {
      heading: 'データの保存期間と削除',
      content: (
        <>
          <p>
            ユーザーは、アカウントおよび関連データの削除をリクエストできます。削除依頼は以下の連絡先までお願いします。
          </p>
          {contactBlock()}
        </>
      ),
    },
    {
      heading: 'セキュリティ',
      content: (
        <p>
          REPRAは、ユーザー情報を保護するために合理的な安全管理措置を講じます。ただし、インターネット上の通信やシステムに100%安全なものはありません。
        </p>
      ),
    },
    {
      heading: '子どものプライバシー',
      content: (
        <p>REPRAは、適用される法律で定められた年齢未満の子どもを対象としていません。</p>
      ),
    },
    {
      heading: 'ポリシーの変更',
      content: (
        <p>
          本ポリシーは、必要に応じて更新される場合があります。変更がある場合は、本ページ上で告知します。
        </p>
      ),
    },
    {
      heading: 'お問い合わせ',
      content: (
        <>
          <p>本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
          {contactBlock()}
        </>
      ),
    },
  ],
};

const en: LegalContent = {
  title: 'Privacy Policy',
  subtitle: 'REPRA Privacy Policy',
  lastUpdated: 'Last updated: 2026',
  sections: [
    {
      heading: 'Introduction',
      content: (
        <p>
          REPRA is a workout tracking app that helps users record workouts, weights, reps, sets, and progress
          graphs so they can review their accumulated effort over time. This Privacy Policy explains how REPRA
          handles user information.
        </p>
      ),
    },
    {
      heading: 'Information We Collect',
      content: (
        <>
          <p>REPRA may collect the following information:</p>
          {bullet([
            'Account information such as email address and username',
            'Workout records such as exercises, weights, reps, sets, dates, and notes',
            'Progress data such as Best 1RM, Total Volume, body weight, and streaks',
            'App usage and device-related information',
          ])}
        </>
      ),
    },
    {
      heading: 'How We Use Information',
      content: (
        <>
          <p>We use collected information to:</p>
          {bullet([
            'Provide, maintain, and improve the app',
            'Save and display workout records',
            'Show progress graphs and statistics',
            'Respond to support inquiries',
            'Prevent abuse and maintain security',
          ])}
        </>
      ),
    },
    {
      heading: 'Data Storage and Third-Party Services',
      content: (
        <>
          <p>REPRA may use third-party services to provide the app, including:</p>
          {bullet([
            'Supabase for authentication, database, and storage',
            'Vercel for hosting',
            'Stripe for future payments if paid features are introduced',
          ])}
          <p className="mt-3">
            These services may process information only as necessary to provide the service.
          </p>
        </>
      ),
    },
    {
      heading: 'Sharing of Information',
      content: (
        <p>
          REPRA does not sell personal information. Information may be shared only when necessary to provide
          the service, comply with law, protect security, or with user consent.
        </p>
      ),
    },
    {
      heading: 'Data Retention and Deletion',
      content: (
        <>
          <p>Users may request deletion of their account and associated data. Please contact us at:</p>
          {contactBlock()}
        </>
      ),
    },
    {
      heading: 'Security',
      content: (
        <p>
          REPRA uses reasonable security measures to protect user information. However, no internet-based
          system is 100% secure.
        </p>
      ),
    },
    {
      heading: "Children's Privacy",
      content: (
        <p>REPRA is not intended for children under the age required by applicable law.</p>
      ),
    },
    {
      heading: 'Changes to This Policy',
      content: (
        <p>This policy may be updated from time to time. Changes will be posted on this page.</p>
      ),
    },
    {
      heading: 'Contact',
      content: (
        <>
          <p>For questions about this Privacy Policy, please contact:</p>
          {contactBlock()}
        </>
      ),
    },
  ],
};

export function PrivacyPage() {
  return <LegalPageLayout ja={ja} en={en} />;
}
