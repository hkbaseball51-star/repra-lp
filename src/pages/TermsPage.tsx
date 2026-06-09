import React from 'react';
import { LegalPageLayout, LegalContent, bullet, contactBlock } from '../components/LegalPageLayout';

const ja: LegalContent = {
  title: '利用規約',
  subtitle: 'REPRA 利用規約',
  lastUpdated: '最終更新日：2026年',
  sections: [
    {
      heading: '規約への同意',
      content: (
        <p>REPRAを利用することで、ユーザーは本利用規約に同意したものとみなされます。</p>
      ),
    },
    {
      heading: 'REPRAについて',
      content: (
        <p>
          REPRAは、ユーザーがトレーニング記録、重量、回数、セット数、進捗グラフを管理し、努力の積み重ねを見返せるようにする筋トレ記録アプリです。
        </p>
      ),
    },
    {
      heading: 'アカウント',
      content: (
        <p>ユーザーは、自身のアカウント情報を適切に管理する責任を負います。</p>
      ),
    },
    {
      heading: 'ユーザーデータと責任',
      content: (
        <p>
          ユーザーは、自身が入力するトレーニング記録、重量、回数、セット数、メモ、進捗データの正確性について責任を負います。
        </p>
      ),
    },
    {
      heading: '健康・フィットネスに関する免責',
      content: (
        <>
          <p className="text-white/80 font-semibold">
            REPRAは、医療上の助言、専門的なフィットネス指導、健康上の診断を提供するものではありません。
          </p>
          {bullet([
            'ユーザーは自身の判断と責任でトレーニングを行うものとします。',
            '健康上の不安がある場合は、医師や専門家に相談してください。',
            'REPRAは、トレーニングによる怪我、健康問題、結果について責任を負いません。',
          ])}
        </>
      ),
    },
    {
      heading: '禁止事項',
      content: (
        <>
          <p>ユーザーは以下の行為をしてはなりません。</p>
          {bullet([
            '違法な目的でREPRAを利用する行為',
            '他人のアカウントへ不正にアクセスする行為',
            'アプリのセキュリティやインフラを妨害する行為',
            '有害、虚偽、迷惑な情報を入力または送信する行為',
            'サービスの不正利用、解析、リバースエンジニアリング',
          ])}
        </>
      ),
    },
    {
      heading: '有料機能',
      content: (
        <p>
          REPRAは、将来的に有料機能を導入する場合があります。有料機能を提供する場合、価格や支払い条件は購入前に明確に表示します。
        </p>
      ),
    },
    {
      heading: 'サービスの変更',
      content: (
        <p>REPRAは、必要に応じて機能の変更、停止、中断を行う場合があります。</p>
      ),
    },
    {
      heading: '利用停止',
      content: (
        <p>
          ユーザーが本規約に違反した場合、REPRAはユーザーの利用を停止または終了することがあります。
        </p>
      ),
    },
    {
      heading: '責任の制限',
      content: (
        <>
          <p>REPRAは現状有姿で提供されます。</p>
          <p className="mt-2">
            法律で認められる最大限の範囲において、REPRAは間接損害、データ損失、トレーニング結果について責任を負いません。
          </p>
        </>
      ),
    },
    {
      heading: '準拠法',
      content: <p>本規約は日本法に準拠します。</p>,
    },
    {
      heading: 'お問い合わせ',
      content: (
        <>
          <p>本規約に関するお問い合わせは、以下までご連絡ください。</p>
          {contactBlock()}
        </>
      ),
    },
  ],
};

const en: LegalContent = {
  title: 'Terms of Service',
  subtitle: 'REPRA Terms of Service',
  lastUpdated: 'Last updated: 2026',
  sections: [
    {
      heading: 'Acceptance of Terms',
      content: <p>By using REPRA, users agree to these Terms of Service.</p>,
    },
    {
      heading: 'About REPRA',
      content: (
        <p>
          REPRA is a workout tracking app that helps users record workouts, weights, reps, sets, and progress
          graphs so they can review their accumulated effort over time.
        </p>
      ),
    },
    {
      heading: 'User Accounts',
      content: (
        <p>Users are responsible for maintaining the security of their account information.</p>
      ),
    },
    {
      heading: 'User Data and Responsibility',
      content: (
        <p>
          Users are responsible for the accuracy of the information they enter, including workout records,
          weights, reps, sets, notes, and progress data.
        </p>
      ),
    },
    {
      heading: 'Health and Fitness Disclaimer',
      content: (
        <>
          <p className="text-white/80 font-semibold">
            REPRA does not provide medical advice, professional fitness coaching, or health diagnosis.
          </p>
          {bullet([
            'Users are responsible for their own training decisions.',
            'Users should consult a qualified professional if they have health concerns.',
            'REPRA is not responsible for injuries, health issues, or training outcomes.',
          ])}
        </>
      ),
    },
    {
      heading: 'Prohibited Uses',
      content: (
        <>
          <p>Users must not:</p>
          {bullet([
            'Use REPRA for illegal purposes',
            "Attempt to access another user's account",
            'Interfere with app security or infrastructure',
            'Enter or transmit harmful, false, or abusive content',
            'Misuse, analyze, reverse engineer, or exploit the service',
          ])}
        </>
      ),
    },
    {
      heading: 'Paid Features',
      content: (
        <p>
          REPRA may introduce paid features in the future. If paid features are introduced, pricing and
          payment terms will be shown clearly before purchase.
        </p>
      ),
    },
    {
      heading: 'Changes to the Service',
      content: (
        <p>REPRA may modify, suspend, or discontinue features when necessary.</p>
      ),
    },
    {
      heading: 'Termination',
      content: (
        <p>
          REPRA may suspend or terminate user access if the user violates these terms.
        </p>
      ),
    },
    {
      heading: 'Limitation of Liability',
      content: (
        <>
          <p>REPRA is provided as-is.</p>
          <p className="mt-2">
            To the maximum extent permitted by law, REPRA is not liable for indirect damages, data loss, or
            training outcomes.
          </p>
        </>
      ),
    },
    {
      heading: 'Governing Law',
      content: <p>These Terms are governed by the laws of Japan.</p>,
    },
    {
      heading: 'Contact',
      content: (
        <>
          <p>For questions about these Terms, please contact:</p>
          {contactBlock()}
        </>
      ),
    },
  ],
};

export function TermsPage() {
  return <LegalPageLayout ja={ja} en={en} />;
}
